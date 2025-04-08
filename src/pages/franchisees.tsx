import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

const cards = [
  {
    title: "OPERADOR",
    description: "Coloque a mão na massa e lidere seu próprio negócio!",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "INVESTIDOR",
    description: "Expanda seu patrimônio sem precisar atuar diretamente no negócio!",
    image: "https://via.placeholder.com/300x400",
  },
];

const StyledCard = styled(Card)({
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Overlay = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
});

const Franchisee = () => {
  return (
    <Box sx={{ textAlign: "center", minHeight: "100vh", padding: "40px", color: "white", backgroundColor: "#000" }}>
      <Typography variant="h4" sx={{ color: "#00ff00", fontWeight: "bold" }}>
        VENHA SER <b>UM FRANQUEADO!</b>
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
        Escolha o modelo ideal para você:
      </Typography>
      <Typography variant="body2" sx={{ background: "#222", padding: "10px", borderRadius: "10px", display: "inline-block" }}>
        Dois formatos de franquia, um mesmo sucesso. <b>Passe o mouse sobre as opções abaixo</b> para ver os detalhes e descubra qual faz mais sentido para você.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {cards.map((card, index) => (
          <Grid container key={index}>
            <StyledCard>
              <CardMedia component="img" height="400" image={card.image} alt={card.title} />
              <Overlay>
                <Typography variant="h6" sx={{ color: "#00ff00" }}>{card.title}</Typography>
                <Typography variant="body2">{card.description}</Typography>
              </Overlay>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Seja qual for seu perfil, há um modelo de negócio ideal para você!
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold", color: "#00ff00" }}>
        Vamos conversar e definir qual é o melhor caminho para você entrar nesse <b>mercado de alto potencial!</b>
      </Typography>
    </Box>
  );
};

export default Franchisee;
