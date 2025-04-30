import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  ListItemButton,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const images = [
  "src/assets/rectangle-33.png",
  "src/assets/Rectangle 42.png",
  "src/assets/Rectangle 37.png",
  "src/assets/Rectangle 42.png",
  "src/assets/Rectangle 45.png",
];

export default function Photos() {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#e5e5e5",
        py: 5,
        px: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 400,
          mb: 4,
          letterSpacing: "0.5px",
        }}
      >
        CONFIRA{" "}
        <Box component="span" sx={{ color: "#06b224", fontWeight: "bold" }}>
          ALGUMAS OBRAS!
        </Box> 
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Grid>
          <Card
            sx={{
              width: 480,
              borderRadius: 2,
              boxShadow: "0px 4px 24px 0px #0001",
            }}
          >
            <CardMedia
              component="img"
              image={images[selected]}
              alt="obra principal"
              sx={{
                height: 325,
                objectFit: "cover",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#06b224",
                  fontWeight: 700,
                  mb: 0.5,
                  fontSize: "1.2rem",
                }}
              >
                Proteção Externa
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#222", fontSize: "1rem" }}
              >
                Ribeirão Preto/SP
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#b1b1b1", fontSize: "1rem" }}
              >
                Identificação
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid >
          <Paper
            elevation={4}
            sx={{
              px: 1,
              py: 1,
              borderRadius: 2,
              boxShadow: "2px 4px 18px 0px #2222",
              minHeight: 325,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container direction="column" spacing={2}>
              {images.map((img, idx) => (
                <Grid  key={idx}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      minWidth: 110,
                      minHeight: 70,
                      borderRadius: 1.5,
                      overflow: "hidden",
                      border:
                        selected === idx
                          ? "2px solid #06b224"
                          : "1px solid #eee",
                      boxShadow:
                        selected === idx
                          ? "0 0 0 3px #e0ffe3"
                          : "0 2px 10px #eee7",
                      background:
                        selected === idx ? "#f4fff4" : "#fff",
                      transition: "all 0.14s",
                      p: 0.5,
                      "&:hover": {
                        border: "2px solid #b3b3b3",
                        background: "#f8fbfa",
                      },
                      position: "relative",
                    }}
                  >
                    <img
                      src={img}
                      alt={`obra-thumb-${idx}`}
                      style={{
                        display: "block",
                        borderRadius: 10,
                        width: "104px",
                        height: "64px",
                        objectFit: "cover",
                      }}
                    />
                    {selected === idx && (
                      <CheckCircleIcon
                        sx={{
                          color: "#06b224",
                          fontSize: 20,
                          position: "absolute",
                          top: 7,
                          right: 7,
                          background: "#fff",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </ListItemButton>
                </Grid>
              ))}
            </Grid>
            <Grid container direction="column" spacing={2} sx={{ ml: 2 }}>
              {images.map((img, idx) => (
                <Grid  key={idx}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      minWidth: 110,
                      minHeight: 70,
                      borderRadius: 1.5,
                      overflow: "hidden",
                      border:
                        selected === idx
                          ? "2px solid #06b224"
                          : "1px solid #eee",
                      boxShadow:
                        selected === idx
                          ? "0 0 0 3px #e0ffe3"
                          : "0 2px 10px #eee7",
                      background:
                        selected === idx ? "#f4fff4" : "#fff",
                      transition: "all 0.14s",
                      p: 0.5,
                      "&:hover": {
                        border: "2px solid #b3b3b3",
                        background: "#f8fbfa",
                      },
                      position: "relative",
                    }}
                  >
                    <img
                      src={img}
                      alt={`obra-thumb-${idx}`}
                      style={{
                        display: "block",
                        borderRadius: 10,
                        width: "104px",
                        height: "64px",
                        objectFit: "cover",
                      }}
                    />
                    {selected === idx && (
                      <CheckCircleIcon
                        sx={{
                          color: "#06b224",
                          fontSize: 20,
                          position: "absolute",
                          top: 7,
                          right: 7,
                          background: "#fff",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </ListItemButton>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            borderColor: "#06b224",
            color: "#222",
            borderRadius: 2,
            px: 4,
            fontSize: "1rem",
            fontWeight: 500,
            boxShadow: "0px 3px 10px #c6eeda22",
            "&:hover": {
              bgcolor: "#eaf7ed",
              borderColor: "#05B63C",
            },
          }}
        >
          Entre para o mercado de alto padrão!
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#06b224",
            color: "#fff",
            borderRadius: 2,
            px: 4,
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0px 3.5px 10px #13CE6622",
            "&:hover": {
              bgcolor: "#00C853",
            },
          }}
        >
          Seja um Franqueado!
        </Button>
      </Box>
    </Box>
  );
}