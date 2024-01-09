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


const UserViewPage = React.lazy(
  () => import("app/users/users.page")
);

const UsersRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Suspended element={UserViewPage} />} />
      <Route path="*" element={<Navigate to="/user" />} />
    </Routes>
  );
};

export default UsersRoutes;
