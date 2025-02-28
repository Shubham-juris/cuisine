import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import contactImage from "../../assets/ContactImg.png";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#6d5b4b" }}
      >
        ABOUT US
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src={contactImage}
              alt="About Us"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#4a4a4a", lineHeight: 1.7 }}>
            Welcome to <strong>Fusion Foodies</strong>, your premier destination for culinary careers!
            We understand the passion and dedication that goes into crafting extraordinary food experiences.
            Our mission is to connect talented chefs and kitchen professionals with fulfilling job opportunities
            that align with their skills, aspirations, and values.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;