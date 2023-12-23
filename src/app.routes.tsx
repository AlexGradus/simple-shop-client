import SuspenseComp from "components/suspence";
import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";


const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return sessionStorage.getItem('accessToken') ? (
    <Suspense fallback={<SuspenseComp />}>
      <div>
        <Element />
      </div>
    </Suspense>
  ) : (
    <Navigate to={'/sign-in'} />
  );
};


const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

const ShopPage = React.lazy(() => import('app/shop'));
const SignInPage = React.lazy(() => import('app/auth/signIn.page'));
const SignUpPage = React.lazy(() => import('app/auth/signUp.page'));
const UserPage = React.lazy(() => import('app/users'));
const CartPage = React.lazy(() => import('app/cart'));


const AppRoutes = () => {
  return (
    <Routes>
      {/* PRIVATE */}
      <Route
        path={'/user/*'}
        element={<PrivateRoute element={UserPage} />}
      />
      <Route path={'/cart/*'} element={<PrivateRoute element={CartPage} />} />

      {/* PUBLIC */}
      <Route path={'/shop/*'} element={<PublicRoute element={ShopPage} />} />
      <Route
        path={'/sign-up/*'}
        element={<PublicRoute element={SignUpPage} />}
      />
      <Route
        path={'/sign-in/*'}
        element={<PublicRoute element={SignInPage} />}
      />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
};

export default AppRoutes;
