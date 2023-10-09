import { Button } from "@mui/material";

const App = () => {
  return (
    <div>
      fgjgf{" "}
      <Button
        color="secondary"
        variant="contained"
        sx={{ border: "none" }}
        className=""
      >
        dhdfgh
      </Button>
      <Button variant="contained" color="success">
        Contained Button
      </Button>
      <Button
        variant="contained"
        sx={{
          m: 3,
          backgroundColor: "red",

          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "red",
          },
        }}
      >
        Outlined Button
      </Button>
      <Button variant="text">Text Button</Button>
    </div>
  );
};

export default App;
