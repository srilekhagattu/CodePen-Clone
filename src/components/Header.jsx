import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../Images/logo.png";

function Header() {
  const Container = styled(AppBar)`
    background: #060606;
    height: 10vh;
  `;
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 70 }} />
      </Toolbar>
    </Container>
  );
}

export default Header;
