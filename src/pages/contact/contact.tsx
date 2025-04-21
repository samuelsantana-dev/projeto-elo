import {  Button, Card, CardContent, Typography, Box, MenuItem, Select, TextField } from "@mui/material";
import WhatsAppButtonMUI from "./whatsappButton";

const Contact = () => {
  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-evenly", 
      alignItems: "flex-start",
      minHeight: "100vh",
      backgroundColor: "#000",
      padding: "60px 40px",
      boxSizing: "border-box",
    }}>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        color: "white", 
        maxWidth: 800,
        width: "100%",
        textAlign: "left", 
        pr: 4,
        pt: 4,
        height: "100%",
        gap: 4 
      }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          SEU FUTURO COMO FRANQUEADO  
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 4 }}>
          COMEÇA  <span style={{ color: "#00ff00" }}>AGORA!</span> 
        </Typography>
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Entre em contato e faça parte do nosso
        <Typography variant="h6" fontWeight="bold" color="#00ff00" sx={{ mb: 4 }}>
        time de sucesso.
        </Typography>
        </Typography>
        <WhatsAppButtonMUI />
        <Typography variant="body1" sx={{ mt: 3 }}>
          Ou se preferir, <Typography component="span" fontWeight="bold">agilize o atendimento</Typography> <br /> através da nossa atendente virtual!
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
        width: "500px",
        height: "500px",
        gap: 22,
      }}>
        <CardContent sx={{ height: "100%", padding: 0 }}>
        <Typography sx={{color: "#ffffff"}}>
            Nome
          </Typography>
          <TextField
            fullWidth
            label="Nome"
            variant="filled"
            sx={{
              mb: 3,
              backgroundColor: "#333",
              input: { color: "#f5f5f5" },
              label: { color: "#9e9e9e" },
            }}
          />
          <Typography sx={{color: "#ffffff"}}>
            Email
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            sx={{
              mb: 3,
              backgroundColor: "#333",
              input: { color: "#f5f5f5" },
              label: { color: "#9e9e9e" },
            }}
          />
            <Typography sx={{color: "#ffffff"}}>
            Whatsapp
          </Typography>
          <TextField
            fullWidth
            label="WhatsApp"
            variant="filled"
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
              variant="filled"
              displayEmpty
              sx={{ backgroundColor: "#222", color: "#f5f5f5" }}
            >
              <MenuItem disabled color="#f5f5f5">Cidade</MenuItem>
              <MenuItem value="SaoPaulo">São Paulo</MenuItem>
              <MenuItem value="Rio">Rio de Janeiro</MenuItem>
            </Select>
            <Select
              fullWidth
              variant="filled"
              displayEmpty
              sx={{ backgroundColor: "#222", color: "#f5f5f5" }}
            >
              <MenuItem disabled color="#f5f5f5">Estado</MenuItem>
              <MenuItem value="SP">SP</MenuItem>
              <MenuItem value="RJ">RJ</MenuItem>
            </Select>
          </Box>
        </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: "#00C853", color: "white", borderRadius: 5 }}
          >
            Seja um Franqueado!
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;