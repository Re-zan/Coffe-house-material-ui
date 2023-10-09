import { Button } from "@mui/material";

const Buttons = ({ text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: 16,
        fontWeight: 700,
        lineHeight: "normal",
        fontFamily: "Playfair Display",
        backgroundColor: "#F9C06A",
        borderRadius: 24,
        textTransform: "none",
        color: "black",
        boxShadow: "0px 6px 12px 0px rgba(249, 192, 106, 0.22)",
        "&:hover": {
          backgroundColor: "#F9C06A",
        },
        paddingX: 3,
        paddingY: 2,
      }}
    >
      {text}
    </Button>
  );
};

export default Buttons;
