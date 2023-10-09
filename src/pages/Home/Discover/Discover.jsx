import { Box, Container, Grid, Paper } from "@mui/material";
import Heading from "../../../components/Heading/Heading";
import Buttons from "../../../components/Buttons/Buttons";
import CoffeeImage from "../../../assets/images/coffe.jpeg";
import Image from "../../../assets/images/coffee_blast.png";

const Discover = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Container maxWidth="xl" sx={{ my: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ background: "#fffefc" }} elevation={0}>
              <Heading
                title="Discover the best coffee"
                des="Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted."
                direction="left"
              ></Heading>
              <Buttons text="Learn More"></Buttons>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ background: "#fffefc" }} elevation={0}>
              <img
                src={CoffeeImage}
                alt="Coffee"
                loading="lazy"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          zIndex: 6,
          bottom: { xs: -50, md: -140 },
          left: 0,
        }}
      >
        <Box
          component="img"
          src={Image}
          alt=""
          sx={{
            width: { xs: 180, md: 398 },
            height: { xs: 70, md: 272 },
            flexShrink: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Discover;
