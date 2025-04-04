import React from "react";
import { Container, Typography, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const photos = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

const MainImage = styled("img")({
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
});

const ScrollContainer = styled("div")({
  maxHeight: "400px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

const Photos = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" color="green" gutterBottom>
        CONFIRA <b>ALGUMAS OBRAS!</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={2}>
          <MainImage src="https://via.placeholder.com/600x400" alt="Main" />
          <Typography variant="h6" color="green" sx={{ marginTop: "10px" }}>
            Proteção Externa
          </Typography>
          <Typography variant="body2">Ribeirão Preto/SP</Typography>
          <Typography variant="caption">Identificação</Typography>
        </Grid>
        <Grid container spacing={2}>
          <ScrollContainer>
            {photos.map((photo, index) => (
              <Card key={index} sx={{ boxShadow: "none" }}>
                <CardMedia component="img" height="80" image={photo} alt={`Obra ${index + 1}`} />
              </Card>
            ))}
          </ScrollContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
          <Button variant="outlined" fullWidth>Entre para o mercado de alto padrão!</Button>
        </Grid>
        <Grid container spacing={2}>
          <Button variant="contained" color="success" fullWidth>Seja um Franqueado!</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Photos;
