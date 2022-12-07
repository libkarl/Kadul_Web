import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectIntroduction = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          mt: { xxs: "1rem", sm: "2rem", ultra: "3.5rem" },
        }}
      >
        <Grid
          sx={{ marginTop: "6rem" }}
          container
          justifyContent="center"
          gap={5}
        >
          <Grid item xs={12} sm>
            <Typography
              sx={{ marginLeft: { xxs: "0rem", sm: "3rem", lg: "6rem" } }}
              variant="h6"
              fontSize={20}
            >
              Description of the work performed
            </Typography>
            <Stack
              sx={{ marginLeft: { xxs: "0rem", sm: "3rem", lg: "6rem" } }}
              spacing={2}
            >
              <Typography fontSize={18}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
                risus. Donec iaculis gravida nulla. Etiam ligula pede, sagittis
                quis, interdum.
              </Typography>
              <Typography fontSize={18}>
                Integer rutrum, orci vestibulum ullamcorper ultricies, lacus
                quam ultricies odio, vitae placerat pede sem sit amet enim.
                Aliquam ornare wisi eu metus. Mauris dolor felis, sagittis at,
                luctus sed, aliquam non, tellus.
              </Typography>
              <Typography fontSize={18}>
                Nullam dapibus fermentum ipsum. Morbi leo mi, nonummy eget
                tristique non, rhoncus non leo. Fusce wisi. Nullam feugiat,
                turpis at pulvinar vulputate, erat libero tristique tellus, nec
                bibendum odio risus sit amet ante. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis. Aliquam ornare wisi
                eu metus. Mauris dolor felis, sagittis at, luctus sed, aliquam
                non, tellus
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm>
            <Typography
              sx={{ marginLeft: { xxs: "0rem", sm: "3rem", lg: "6rem" } }}
              variant="h6"
              fontSize={20}
            >
              List of provided services
            </Typography>

            <List
              sx={{
                display: "list-item",
                marginLeft: { xxs: "0rem", sm: "3rem", lg: "6rem" },
              }}
            >
              <ListItem>
                <Typography fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize={18}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectIntroduction;
