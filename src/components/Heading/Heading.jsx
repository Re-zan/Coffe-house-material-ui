import { Box, Typography } from "@mui/material";

const Heading = ({ title, des, direction }) => {
  return (
    <Box sx={{ textAlign: `${direction}`, my: 4 }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: { sm: 20, md: 54 },
          fontFamily: "Playfair Display",
          lineHeight: "normal",
          fontWeight: 700,
          color: "#603809",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          my: 2,
          fontSize: { sm: 12, md: 20 },
          fontFamily: "Playfair Display",

          fontWeight: 400,
          color: "#707070",
        }}
      >
        {des}
      </Typography>
    </Box>
  );
};

export default Heading;
