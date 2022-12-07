import { Box, Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/kadul-logo.jpg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Logo = styled.img`
  width: 8rem;
  margin-left: 2.2rem;
`;

const BackButton = styled(Link)`
  margin-top: 2.8rem;
  scale: 0.7;
`;

const NavbarProject = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#fff",
      top: 0,
      justifyContent: "space-between",
      height: "auto",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Logo src={logo} alt="logo" />
    </Link>

    <BackButton to="/kadul" className="anime_bt">
      <span class="ef"></span>Back-{">"}
    </BackButton>
  </Stack>
);

export default NavbarProject;
