import React from "react";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        px: 3,
        mt: 4,
        backgroundColor: "yellow",
        fontSize: isMobile ? "1rem" : "1.5rem", // Adjusted for readability
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton href="https://facebook.com" target="_blank">
          <Facebook sx={{ color: "primary.main" }} />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank">
          <Twitter sx={{ color: "primary.main" }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank">
          <Instagram sx={{ color: "primary.main" }} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank">
          <LinkedIn sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1, textAlign: "center" }}>
        &copy; {new Date().getFullYear()} CUISINE CAREER. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
