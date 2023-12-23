import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Loader from "components/loader";
import { userOrdersPendingSelector, userPendingSelector, userSelector } from "./store/users.selectors";
import { getUser, getUserOrders } from "./store/users.actions";
import Header from "components/header";
import OrderCard from "./components/user-orders";

const UserViewPage: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const userPending = useSelector(userPendingSelector);
  const ordersPending = useSelector(userOrdersPendingSelector);

  useEffect(() => {
    dispatch<any>(getUser());
    dispatch<any>(getUserOrders());
  }, []);

  return (
    <>
      <Header />
      {userPending && ordersPending && <Loader />}
      {(!userPending && !ordersPending) && (
        <>

          <Typography
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
            variant="h3"
          >
            Email: {user.user?.email}
          </Typography>
          <Grid
            sx={{
              width: { xs: "80vw", lg: "100%" },
              overflow: "auto",
              padding: "0 5px",
              maxHeight: { xs: "80vh", lg: "100vh" },
            }}
          >
            {user.userOrders?.length ? (
              user.userOrders?.map((order) => (
                <OrderCard key={order.id} {...order} />
              ))
            ) : (
              <Typography
                sx={{ marginBottom: "20px" }}
                variant="h6"
              >
                No Orders
              </Typography>
            )}
          </Grid>

        </>
      )}


    </>
  );
};

export default UserViewPage;