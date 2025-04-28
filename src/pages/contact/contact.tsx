/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
import { Button, Card, CardContent, Typography, Box, MenuItem, Select, TextField, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppButtonMUI from "./whatsappButton";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    email: "",
    whatsapp: ""
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.whatsapp) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      console.log('formData', formData);
      const response = await fetch("http://195.200.6.192:5050/api/v1/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Contato criado com sucesso!");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          city: "",
          state: ""
        });
      } else {
        console.error("Erro ao criar contato:", response.status);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#000",
      padding: isMobile ? "40px 16px" : isTablet ? "60px 24px" : "60px 40px",
      boxSizing: "border-box",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 4 : 0
    }}>
      {/* Left Content */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "white",
        maxWidth: 800,
        width: "100%",
        textAlign: isMobile ? "center" : "left",
        pr: isMobile ? 0 : 4,
        pb: isMobile ? 4 : 0,
        pt: isMobile ? 0 : 4,
        height: "100%",
        gap: isMobile ? 2 : 4
      }}>
        <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h3"} fontWeight="bold">
          SEU FUTURO COMO FRANQUEADO
          <Typography 
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"} 
            fontWeight="bold" 
            sx={{ 
              mb: isMobile ? 2 : 4, 
              mt: 1,
              lineHeight: 1.2
            }}
          >
            COMEÇA <span style={{ color: "#00ff00" }}>AGORA!</span>
          </Typography>
        </Typography>

        <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
          Entre em contato e faça parte do nosso
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            fontWeight="bold" 
            color="#00ff00" 
            sx={{ 
              mt: 1,
              lineHeight: 1.2
            }}
          >
            time de sucesso.
          </Typography>
        </Typography>
        
        <Box sx={{ 
          display: "flex", 
          justifyContent: isMobile ? "center" : "flex-start",
          mt: isMobile ? 1 : 0
        }}>
          <WhatsAppButtonMUI />
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mt: isMobile ? 1 : 3, 
            fontSize: isMobile ? "0.875rem" : isTablet ? "0.95rem" : "1rem",
            textAlign: isMobile ? "center" : "left"
          }}
        >
          Ou se preferir, <Typography component="span" fontWeight="bold">agilize o atendimento</Typography> <br />
          através da nossa atendente virtual!
          <Typography 
            fontWeight="bold" 
            color="success.main"
            sx={{
              display: "block",
              mt: 1
            }}
          >
            É esse balãozinho no canto da sua tela!
          </Typography>
        </Typography>
      </Box>

      {/* Form Card */}
      <Card sx={{
        backgroundColor: "#111",
        padding: isMobile ? 2 : isTablet ? 3 : 4,
        borderRadius: 3,
        maxWidth: 450,
        width: "100%",
        minHeight: isMobile ? "auto" : 500,
      }}>
        <CardContent sx={{ 
          height: "100%", 
          padding: 0,
          '&:last-child': {
            paddingBottom: 0
          }
        }}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ 
              color: "#ffffff", 
              mb: 1, 
              fontSize: isMobile ? "0.875rem" : "1rem" 
            }}>
              Nome *
            </Typography>
            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="filled"
              required
              sx={{
                mb: isMobile ? 2 : 3,
                backgroundColor: "#333",
                input: { 
                  color: "#f5f5f5", 
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  padding: isMobile ? "12px 12px" : "16px 12px"
                },
                '& .MuiFilledInput-root': {
                  borderRadius: '4px'
                }
              }}
            />

            <Typography sx={{ 
              color: "#ffffff", 
              mb: 1, 
              fontSize: isMobile ? "0.875rem" : "1rem" 
            }}>
              Email *
            </Typography>
            <TextField
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="filled"
              required
              sx={{
                mb: isMobile ? 2 : 3,
                backgroundColor: "#333",
                input: { 
                  color: "#f5f5f5", 
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  padding: isMobile ? "12px 12px" : "16px 12px"
                },
                '& .MuiFilledInput-root': {
                  borderRadius: '4px'
                }
              }}
            />

            <Typography sx={{ 
              color: "#ffffff", 
              mb: 1, 
              fontSize: isMobile ? "0.875rem" : "1rem" 
            }}>
              Whatsapp *
            </Typography>
            <TextField
              fullWidth
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              variant="filled"
              required
              sx={{
                mb: isMobile ? 2 : 3,
                backgroundColor: "#333",
                input: { 
                  color: "#f5f5f5", 
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  padding: isMobile ? "12px 12px" : "16px 12px"
                },
                '& .MuiFilledInput-root': {
                  borderRadius: '4px'
                }
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography 
                variant="subtitle1" 
                color="white" 
                sx={{ 
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  mb: 1
                }}
              >
                Selecione sua Cidade e Estado
              </Typography>
              <Box sx={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row", 
                gap: isMobile ? 2 : 2,
                mb: isMobile ? 2 : 3
              }}>
                <Select
                  fullWidth
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="filled"
                  displayEmpty
                  sx={{ 
                    backgroundColor: "#222", 
                    color: "#f5f5f5", 
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    '& .MuiSelect-filled': {
                      padding: isMobile ? '12px 12px' : '16px 12px'
                    }
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>Cidade</MenuItem>
                  <MenuItem value="SaoPaulo" sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>São Paulo</MenuItem>
                  <MenuItem value="Rio" sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>Rio de Janeiro</MenuItem>
                </Select>
                <Select
                  fullWidth
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  variant="filled"
                  displayEmpty
                  sx={{ 
                    backgroundColor: "#222", 
                    color: "#f5f5f5", 
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    '& .MuiSelect-filled': {
                      padding: isMobile ? '12px 12px' : '16px 12px'
                    }
                  }}
                >
                  <MenuItem value="" disabled sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>Estado</MenuItem>
                  <MenuItem value="SP" sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>SP</MenuItem>
                  <MenuItem value="RJ" sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>RJ</MenuItem>
                </Select>
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: isMobile ? 2 : 3,
                backgroundColor: "#00C853",
                color: "white",
                borderRadius: 5,
                fontSize: isMobile ? "0.875rem" : "1rem",
                padding: isMobile ? "10px 16px" : "12px 24px",
                "&:hover": {
                  backgroundColor: "#00E676"
                }
              }}
            >
              Seja um Franqueado!
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;