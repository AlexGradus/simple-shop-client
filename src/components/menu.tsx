import * as React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { ListItemIcon, ListItemText, SvgIcon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



interface NavListItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const NavListItem: FC<NavListItemProps> = ({ to, icon, text }) => {

  return (
    <NavLink
      className={({ isActive }) => `link ${isActive ? `active` : ""}`}
      to={to}
    >
      <MenuItem>
        <ListItemIcon>
          <SvgIcon>{icon}</SvgIcon>
        </ListItemIcon>
      </MenuItem>
    </NavLink>
  );
};

interface MenuComponentProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleSignOut: () => void;
}

const MenuComponent: FC<MenuComponentProps> = ({
  anchorEl,
  handleClose,
  handleSignOut,
}) => {


  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      disableScrollLock
    >
      <NavListItem to="/shop" icon={<StorefrontIcon />} text="header.shop" />
      <NavListItem to="/cart" icon={<ShoppingCartIcon />} text="header.cart" />
      <NavListItem
        to="/profile"
        icon={<AccountCircleIcon />}
        text="header.profile"
      />
      <MenuItem onClick={handleSignOut}>
        <ListItemIcon>
          <SvgIcon>
            <ExitToAppIcon />
          </SvgIcon>
        </ListItemIcon>
      </MenuItem>
    </Menu>
  );
};

export default MenuComponent;
