// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

// Note: In a real implementation, you would need to properly import these images
// or replace them with appropriate alternatives
const botO = "./bot-o.png";
const cPiaDeLogo1 = "./c-pia-de-logo-1.png";
const capa1 = "./capa-1.png";

const navigationItems = [
  { label: "Home", active: true },
  { label: "Sobre", active: false },
  { label: "Diferencial", active: false },
  { label: "Benefícios", active: false },
  { label: "FAQ", active: false },
  { label: "Contato", active: false },
];

const Box1 = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundImage: "url(/image.png)",
            backgroundSize: "100% 100%",
          }}
        >
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              background:
                "linear-gradient(226deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          />

          {/* Green horizontal line */}
          <Box
            sx={{
              position: "absolute",
              width: "234px",
              height: "7px",
              top: "458px",
              left: "182px",
              bgcolor: "primary.dark",
            }}
          />

          {/* Main headline */}
          <Box sx={{ position: "absolute", top: "491px", left: "176px" }}>
            <Typography
              variant="h1"
              color="common.white"
              sx={{ fontWeight: 300 }}
            >
              CONSTRUA
            </Typography>
            <Typography variant="h2" color="common.white">
              SEU SUCESSO
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography
            variant="h3"
            color="common.white"
            sx={{
              position: "absolute",
              top: "737px",
              left: "186px",
            }}
          >
            Um modelo consolidade, lucrativo e com alta
            <br />
            demanda no setor da construção.
          </Typography>

          {/* CTA Button */}
          <Box
            component="img"
            src={botO}
            alt="Botão"
            sx={{
              position: "absolute",
              width: "261px",
              height: "61px",
              top: "844px",
              left: "182px",
            }}
          />

          {/* Header */}
          <AppBar position="absolute" sx={{ height: "193px" }}>
            <Toolbar sx={{ minHeight: "193px !important" }}>
              {/* Logo */}
              <Box
                component="img"
                src={cPiaDeLogo1}
                alt="Logo"
                sx={{
                  width: "108px",
                  height: "118px",
                  ml: "108px",
                  mt: "38px",
                }}
              />

              {/* Navigation */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: "absolute",
                  top: "55px",
                  left: "674px",
                }}
              >
                {navigationItems.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <Typography
                      sx={{
                        fontWeight: item.active ? 700 : 400,
                        color: item.active ? "primary.main" : "secondary.main",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </Typography>
                    {index < navigationItems.length - 1 && (
                      <Divider orientation="vertical" flexItem />
                    )}
                  </React.Fragment>
                ))}
              </Stack>

              {/* CTA and WhatsApp buttons */}
              <Box
                sx={{
                  position: "absolute",
                  top: "36px",
                  right: "108px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "253px",
                    height: "50px",
                    borderRadius: "195px",
                  }}
                >
                  <Typography component="span" variant="subtitle1">
                    Seja um{" "}
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    Franqueado
                  </Typography>
                </Button>

                <IconButton
                  sx={{
                    width: "61px",
                    height: "61px",
                    bgcolor: "primary.light",
                    ml: 1.5,
                    "&:hover": {
                      bgcolor: "primary.light",
                    },
                  }}
                >
                  {/* <WhatsAppIcon sx={{ color: "common.white" }} /> */}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </Box>
  );
};

export default Box1;
