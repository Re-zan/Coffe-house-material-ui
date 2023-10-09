import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useLocation } from "react-router-dom";
import Buttons from "../Buttons/Buttons";

const Header = () => {
  //menu
  const pages = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/menu",
      title: "Menu",
    },
    {
      path: "/about-us",
      title: "About Us",
    },
    {
      path: "/contact-us",
      title: "Contact U",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();
  console.log(location);

  return (
    <AppBar
      position="static"
      sx={{
        py: 1,
        backgroundColor: `${
          location.pathname === "/" ? "transparent" : "blue"
        }`,
        zIndex: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Clicker Script",
              fontWeight: 500,
              fontSize: 35,
              letterSpacing: ".3rem",
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            Bean Scene
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ path, title }) => (
                <Link to={`${path}`} key={path}>
                  <MenuItem key={path} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Clicker Script",
              fontWeight: 35,
              letterSpacing: ".3rem",
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            Bean Scene
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map(({ path, title }) => (
              <MenuItem
                key={path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  px: 5,
                  textTransform: "none",
                  display: "block",
                  fontFamily: "Playfair Display",
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: "normal",
                  "& > a": {
                    textDecoration: "none",
                    color: "white",
                  },
                }}
              >
                <Link to={`${path}`}>{title}</Link>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                textDecoration: "none",
                color: "white",
                fontFamily: "Playfair Display",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Sign In
            </Typography>
            <Buttons text="Sign Up"></Buttons>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
