import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({
  element: Element,
}) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};


const CartViewPage = React.lazy(() => import("app/cart/cart.page"));

const CartRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Suspended element={CartViewPage} />} />

      {/* DEFAULT */}
      <Route path="*" element={<Navigate to="/cart" />} />
    </Routes>
  );
};

export default CartRoutes;
