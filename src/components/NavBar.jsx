// import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

function NavBar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tab to="/">Code for interview</Tab>
        <Tab to="/all">All Users</Tab>
        <Tab to="/add">Add User</Tab>
      </Toolbar>
    </Header>
  );
}

export default NavBar;
