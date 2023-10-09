import { Box, Container, Typography } from "@mui/material";
import BannerImage from "../../../assets/images/coffe-umage.jpeg";
import Buttons from "../../../components/Buttons/Buttons";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { sm: 500, md: 950 },
        zIndex: 3,
        marginTop: -10,
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(90deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0.00) 87.45%)",
          height: { sm: 500, md: 950 },
        }}
      >
        <Container maxWidth="xl" sx={{ py: { sm: 18, md: 24 } }}>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                fontSize: { sm: 10, md: 22 },
                fontFamily: "Playfair Display",
                lineHeight: "normal",
                fontWeight: 500,
              }}
            >
              We’ve got your morning covered with
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: { sm: 50, md: 220 },
                fontFamily: "Clicker Script",
                lineHeight: "normal",
                fontWeight: 400,
              }}
            >
              Coffee
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                width: 528,
                fontSize: { sm: 14, md: 20 },
                fontFamily: "Playfair Display",
                my: 2,
                fontWeight: 400,
              }}
            >
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </Typography>
            <Buttons text="Order Now"></Buttons>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
