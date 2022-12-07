import { Box, Container, Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/kadul-logo.jpg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Logo = styled.img`
  width: 8rem;
`;

const BackButton = styled(Link)`
  margin-top: 2.6rem;
  scale: 0.7;
  transform: translate(10%, -50%);
  @media (max-width: 450px) {
    scale: 0.6;
    margin-top: 2.4rem;
  }
`;

const NavbarProject = () => (
  <Container maxWidth="xl">
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        p: { xxs: 1, xsm: 2 },
        position: "sticky",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
        height: "auto",
      }}
    >
      <Box
        sx={{
          scale: {
            xxs: "0.9",
            xsm: "1",
          },
        }}
      >
        <Link to="/" style={{ display: "flex" }}>
          <Logo src={logo} alt="logo" />
        </Link>
      </Box>

      <BackButton to="/kadul" className="anime_bt">
        <span class="ef"></span>Back-{">"}
      </BackButton>
    </Stack>
  </Container>
);

export default NavbarProject;
