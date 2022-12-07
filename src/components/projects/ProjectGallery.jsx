import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import projectImg1 from "../../assets/project_gallery1.png";
import projectImg2 from "../../assets/project_gallery2.png";
import projectImg3 from "../../assets/project_gallery3.png";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

const StyledGalleryItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const ProjectGallery = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        sx={{
          marginTop: { xxs: "1rem", lgs: "4rem" },
          fontSize: { xxs: "1.5rem", lg: "2.2rem", lgs: "2.4rem" },
          color: "red",
          textAlign: "center",
        }}
      >
        Gallery
      </Typography>
      <Typography
        sx={{
          fontSize: { xxs: "1.2rem", lg: "1.5rem", lgs: "1.5rem" },
          textAlign: "center",
          marginX: "auto",
          width: { xxs: "350px", lg: "600px" },
        }}
      >
        Photos from the construction process in different phases of building
        family dream house.
      </Typography>
      <Box
        sx={{
          p: { xss: "0", lg: "2rem" },
          marginLeft: "auto",
          marginRight: "auto",
          mt: { xxs: "1rem", sm: "2rem", ultra: "3.5rem" },
        }}
      >
        <Grid
          container
          spacing={{ xxs: 3, ultra: 6 }}
          justifyContent="center"
          alignItems={{ xxs: "center", ultra: "stretch" }}
        >
          <Grid
            item
            sx={{
              maxWidth: { xxs: "350px", xsm: "100%" },
            }}
          >
            <StyledGalleryItem src={projectImg1} alt="home" />
          </Grid>
          <Grid
            item
            sx={{
              maxWidth: { xxs: "350px", xsm: "100%" },
            }}
          >
            <StyledGalleryItem src={projectImg2} alt="home" />
          </Grid>
          <Grid
            item
            sx={{
              maxWidth: { xxs: "350px", xsm: "100%" },
            }}
          >
            <StyledGalleryItem src={projectImg3} alt="home" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectGallery;
