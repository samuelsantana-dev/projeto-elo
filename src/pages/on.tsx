import React from "react";
import { Box, Typography } from "@mui/material";

const steps = [
  "Preencha o formulário de interesse.",
  "Converse com nossa equipe e tire suas dúvidas.",
  "Avaliamos seu perfil e iniciamos o processo.",
  "Abertura da sua unidade, treinamento e suporte contínuo.",
  "Comece a faturar com a Protege Piso!",
];

const FranchiseSteps = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F4F4F4",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight="bold" color="textPrimary">
          COMO SE TORNAR
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="success.main" gutterBottom>
          UM FRANQUEADO?
        </Typography>
        {steps.map((step, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mt: 2 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="success.dark"
              sx={{ mr: 1 }}
            >
              {index + 1}.
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "20%",
          height: "100%",
          backgroundImage: "url(/pattern.png)",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
};

export default FranchiseSteps;
