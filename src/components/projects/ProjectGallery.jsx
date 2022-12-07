import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectGallery = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xxs: "1.5rem", lg: "2.2rem", lgs: "2.4rem" },
          color: "red",
          textAlign: "center",
        }}
      >
        Gallery
      </Typography>
      <Typography
        sx={{
          fontSize: { xxs: "0.8rem", lg: "1rem", lgs: "1.2rem" },
          textAlign: "center",
        }}
      >
        Photos from the construction process in different phases of building
        family dream house.
      </Typography>
    </Box>
  );
};

export default ProjectGallery;
