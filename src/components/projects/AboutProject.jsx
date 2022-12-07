import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import projectImage from "../../assets/project-1.png";

const ProjectImage = styled("img")({
  "@media (min-width: 900px)": {
    width: "80%",
    height: "80%",
  },
  borderRadius: "1rem",
  marginRight: "auto",
  marginLeft: "auto",
});

const AboutProject = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "100%", marginTop: { xxs: "1rem", lgs: "2rem" } }}>
        <Grid
          container
          direction={{ xxs: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: { xxs: "100%", sm: "50%" },
            }}
            height="100%"
          >
            <Box
              sx={{
                display: "column",
                padding: { lg: "1rem", lgs: "4.5rem" },
                paddingBottom: { xxs: "0rem", lgs: "20rem" },
              }}
              height="100%"
            >
              <Typography
                sx={{
                  color: "red",
                  textAlign: { xxs: "center", lg: "left" },

                  fontSize: {
                    xxs: "1.5rem",
                    sm: "2rem",
                    lg: "2.3rem",
                    lgs: "3.3rem",
                  },
                  width: { xxs: "350px", sm: "100%" },
                }}
              >
                Build perfect home for your family
              </Typography>
              <Typography
                sx={{
                  textAlign: { xxs: "center", lg: "left" },
                  fontSize: {
                    xxs: "1rem",
                    sm: "1.2rem",
                    lgs: "1.3rem",
                  },
                  width: { xxs: "350px", sm: "100%" },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Beautiful plants that encourage you to get creative. Beautiful
                plants that encourage you to get creative. Beautiful plants that
                encourage you to get creative. Beautiful plants that encourage
                you.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: { xxs: "1.5rem", lg: "0rem" },
              width: { xss: "100%", md: "80%", lg: "50%" },
            }}
            height="100%"
          >
            <ProjectImage src={projectImage} alt="project image"></ProjectImage>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutProject;
