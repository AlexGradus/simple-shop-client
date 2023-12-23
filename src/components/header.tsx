import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import { userSelector } from "app/users/store/users.selectors";
import { getUser } from "app/users/store/users.actions";
import { signOut } from "app/auth/store/auth.actions";


export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);

  const handleSignOut = () => {
    dispatch<any>(signOut());
    navigate("/shop");
  };

  useEffect(() => {
    if (!user) {
      dispatch<any>(getUser());
    }
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <div className="header_content">
            <Link
              href="/shop"
              underline="none"
              color="inherit"
              fontWeight="bold"
              variant="h5"
              sx={{ margin: '0 10px' }}
            >
              Shop
            </Link>
            <Link
              href="/user"
              underline="none"
              color="inherit"
              fontWeight="bold"
              variant="h5"
              sx={{ margin: '0 10px' }}
            >
              User
            </Link>
            <Link
              href="/cart"
              underline="none"
              color="inherit"
              fontWeight="bold"
              variant="h5"
            >
              Cart
            </Link>
          </div>
        </Box>
        <div className="header--user">
          {user ? (
            <>
              <Typography variant="h6">{user.name}</Typography>
              <Button color="inherit" onClick={handleSignOut}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <NavLink className="link" to="/sign-in">
                <Button color="inherit">SignIn</Button>
              </NavLink>
              <NavLink className="link" to="/sign-up">
                <Button color="inherit">SignUp</Button>
              </NavLink>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

