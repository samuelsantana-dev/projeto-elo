/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
import { Button, Card, CardContent, Typography, Box, MenuItem, Select, TextField } from "@mui/material";
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
      alignItems: "flex-start",
      minHeight: "100vh",
      backgroundColor: "#000",
      padding: "60px 40px",
      boxSizing: "border-box",
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 4, md: 0 }
    }}>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        color: "white", 
        maxWidth: 800,
        width: "100%",
        textAlign: "left", 
        pr: { md: 4 },
        pt: 4,
        height: "100%",
        gap: 4 
      }}>
        <Typography variant="h4" fontWeight="bold">
          SEU FUTURO COMO FRANQUEADO  
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 4, mt: 1 }}>
            COMEÇA <span style={{ color: "#00ff00" }}>AGORA!</span> 
          </Typography>
        </Typography>

        <Typography variant="h5" fontWeight="bold">
          Entre em contato e faça parte do nosso
          <Typography variant="h6" fontWeight="bold" color="#00ff00" sx={{ mt: 1 }}>
            time de sucesso.
          </Typography>
        </Typography>
        <WhatsAppButtonMUI />
        <Typography variant="body1" sx={{ mt: 3 }}>
          Ou se preferir, <Typography component="span" fontWeight="bold">agilize o atendimento</Typography> <br /> 
          através da nossa atendente virtual!
          <Typography fontWeight="bold" color="success.main">
            É esse balãozinho no canto da sua tela!
          </Typography>
        </Typography>
      </Box>

      <Card sx={{ 
        backgroundColor: "#111", 
        padding: 4,
        borderRadius: 3, 
        maxWidth: 450,
        width: "100%",
        minHeight: 500
      }}>
        <CardContent sx={{ height: "100%", padding: 0 }}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ color: "#ffffff", mb: 1 }}>
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
                mb: 3,
                backgroundColor: "#333",
                input: { color: "#f5f5f5" },
                label: { color: "#9e9e9e" },
              }}
            />

            <Typography sx={{ color: "#ffffff", mb: 1 }}>
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
                mb: 3,
                backgroundColor: "#333",
                input: { color: "#f5f5f5" },
                label: { color: "#9e9e9e" },
              }}
            />

            <Typography sx={{ color: "#ffffff", mb: 1 }}>
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
                mb: 3,
                backgroundColor: "#333",
                input: { color: "#f5f5f5" },
                label: { color: "#9e9e9e" },
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="subtitle1" color="white">
                Selecione sua Cidade e Estado
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Select
                  fullWidth
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="filled"
                  displayEmpty
                  sx={{ backgroundColor: "#222", color: "#f5f5f5" }}
                >
                  <MenuItem value="" disabled>Cidade</MenuItem>
                  <MenuItem value="SaoPaulo">São Paulo</MenuItem>
                  <MenuItem value="Rio">Rio de Janeiro</MenuItem>
                </Select>
                <Select
                  fullWidth
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  variant="filled"
                  displayEmpty
                  sx={{ backgroundColor: "#222", color: "#f5f5f5" }}
                >
                  <MenuItem value="" disabled>Estado</MenuItem>
                  <MenuItem value="SP">SP</MenuItem>
                  <MenuItem value="RJ">RJ</MenuItem>
                </Select>
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                backgroundColor: "#00C853", 
                color: "white", 
                borderRadius: 5,
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