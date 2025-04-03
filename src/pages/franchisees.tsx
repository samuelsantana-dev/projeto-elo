import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

// Assuming the image is available at this path
import group12 from "../assets/Rectangle-doze.png";

const GreenBorderBox = styled(Paper)(({ theme }) => ({
  border: "3px solid #00FF4C",
  borderRadius: "46.5px",
  padding: theme.spacing(2.5),
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const FranchiseOption = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: theme.spacing(3),
  overflow: "hidden",
  position: "relative",
  height: "100%",
  boxShadow: "none",
  "&:hover": {
    cursor: "pointer",
  },
}));

const GreenButton = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "2px solid #00FF4C",
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  margin: "0 auto",
  marginTop: theme.spacing(2),
}));

const franchiseOptions = [
  {
    title: "OPERADOR",
    description: "Coloque a mão na massa e lidere seu próprio negócio!",
    ctaText: "Passe o mouse e saiba mais",
  },
  {
    title: "INVESTIDOR",
    description:
      "Expanda seu patrimônio sem precisar atuar diretamente no negócio!",
    ctaText: "Passe o mouse e saiba mais",
  },
];

const FranchiseBox = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#00FF4C",
              fontWeight: 500,
              mb: 1,
            }}
          >
            <span>VENHA SER </span>
            <span style={{ fontWeight: 800 }}>UM FRANQUEADO!</span>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 500,
              letterSpacing: "3.3px",
              mb: 4,
            }}
          >
            Escolha o modelo ideal para você:
          </Typography>

          <GreenBorderBox>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              <span>Dois formatos de franquia, um mesmo sucesso. </span>
              <span style={{ fontWeight: 800 }}>
                Passe o mouse sobre as opções abaixo para ver os detalhes
              </span>
              <span> e descubra qual faz mais sentido para você.</span>
            </Typography>
          </GreenBorderBox>
        </Box>

        <Box sx={{ mt: 6, mb: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {franchiseOptions.map((option, index) => (
           <Grid container spacing={4} justifyContent="center">
                <FranchiseOption>
                  <Box
                    component="img"
                    src={group12}
                    alt={option.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <GreenButton>
                      <Typography
                        variant="h6"
                        sx={{ color: "#00FF4C", fontWeight: 600 }}
                      >
                        {option.title}
                      </Typography>
                    </GreenButton>
                    <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                      {option.description}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        borderBottom: "1px solid white",
                        width: "50%",
                        mx: "auto",
                        pb: 1,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "white" }}>
                        {option.ctaText}
                      </Typography>
                    </Box>
                  </Box>
                </FranchiseOption>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Seja qual for seu perfil, há um modelo de negócio ideal para você!
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
            }}
          >
            <span style={{ color: "white" }}>
              Vamos conversar e definir qual é o melhor caminho
              <br />
              para você entrar nesse{" "}
            </span>
            <span style={{ color: "#00FF4C" }}>mercado de alto potencial!</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FranchiseBox;
