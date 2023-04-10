import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import projectImage from "../../assets/project-1.png";

const ProjectImage = styled.img`
  width: "100%";
  height: "100%";
  border-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const AboutProject = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Grid
        container
        direction={{ xxs: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box width="50%" height="100%">
          <Box
            sx={{
              display: "column",
              marginTop: { xxs: "0rem", lg: "-14rem" },
            }}
            height="100%"
          >
            <Typography
              sx={{
                color: "red",
                textAlign: { xxs: "center", lg: "left" },
                paddingLeft: { xxs: "0rem", lg: "14rem" },
                fontSize: { xxs: "1.5rem", lg: "2.3rem", lgs: "3.3rem" },
              }}
            >
              Build perfect home for your family
            </Typography>
            <Typography
              sx={{
                textAlign: { xxs: "center", lg: "left" },
                paddingLeft: { lg: "14rem" },
                paddingRight: { lg: "7rem" },
                fontSize: { xxs: "1rem", lg: "1.2rem", lgs: "1.25rem" },
              }}
            >
              Beautiful plants that encourage you to get creative. Beautiful
              plants that encourage you to get creative. Beautiful plants that
              encourage you to get creative.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xxs: "2.8rem" },
            width: { xss: "100%", md: "80%", lg: "50%" },
          }}
        >
          <ProjectImage src={projectImage} alt="project image"></ProjectImage>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutProject;
