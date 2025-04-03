import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { JSX } from "react";

const BoxComponent = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const statistics = [
    {
      number: "70+",
      description: "franquias no\nBrasil e EUA",
    },
    {
      number: "10 mil+",
      description: "Obras protegidas",
    },
    {
      content: (
        <Box textAlign="center">
          <Typography variant={isMobile ? "h4" : "h3"} color="white" sx={{ lineHeight: "1.2" }}>
            Modelo
            <br />
            de <Box component="span" fontWeight="bold">Negócios</Box>
          </Typography>
          <Typography variant={isMobile ? "body1" : "h6"} color="white" sx={{ mt: 1 }}>
            consolidado e escalável
          </Typography>
        </Box>
      ),
    },
  ];

  const awards = [
    {
      bold: "Prêmio Objeto Brasil 2016",
      regular: " – Categoria Design Construção Civil",
    },
    {
      bold: "Produto patenteado",
      regular: " e marca registrada",
    },
  ];

  return (  
    <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #00A651 0%, #007A3D 100%)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ p: 0, height: "100%" }}>
          <Box sx={{ width: "100%", height: "100%", maxWidth: 1183, display: "flex", flexDirection: "column", justifyContent: "space-between", py: 4 }}>
            {/* Header text */}
            <Typography variant={isMobile ? "h5" : "h4"} color="white" align="center">
              <Box component="span" fontWeight={800}>Desde 2005</Box>
              <Box component="span" fontWeight={500}>
                , a Protege Piso é referência nacional
                <br />
                em proteção técnica de superfícies durante obras e reformas.
              </Box>
            </Typography>

            {/* Statistics section */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Divider sx={{ mb: 5 }} />
              <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                {statistics.map((stat, index) =>
                  stat.content ? (
                    <Box key={index} sx={{ maxWidth: 323 }}>{stat.content}</Box>
                  ) : (
                    <Box key={index}>
                      <Typography variant="h1" color="white" fontWeight="bold">
                        {stat.number}
                      </Typography>
                      <Typography variant="h5" color="white" fontWeight="medium" sx={{ mt: 1, whiteSpace: "pre-line" }}>
                        {stat.description}
                      </Typography>
                    </Box>
                  )
                )}
              </Stack>
              <Divider sx={{ mt: 5 }} />
            </Box>

            {/* Awards section */}
            <Stack direction="column" spacing={2} alignItems="center" textAlign="center" sx={{ pb: 2 }}>
              {awards.map((award, index) => (
                <Typography key={index} variant="subtitle1" color="white">
                  <Box component="span" fontWeight={800}>{award.bold}</Box>
                  <Box component="span" fontWeight={500}>{award.regular}</Box>
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BoxComponent;
