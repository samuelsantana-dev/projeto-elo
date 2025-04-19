import {  Button, Card, CardContent, Typography, Box, MenuItem, Select, TextField } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-evenly", 
      alignItems: "flex-start",
      minHeight: "100vh",
      backgroundColor: "#000",
      padding: "60px 40px", // Padding geral aumentado
      boxSizing: "border-box"
    }}>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        color: "white", 
        maxWidth: 800,
        width: "100%", // Ocupa toda largura disponível
        textAlign: "left", 
        pr: 4,
        pt: 4,
        height: "100%", // Ocupa toda altura
        gap: 4 // Espaçamento maior entre elementos
      }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          SEU FUTURO COMO FRANQUEADO  
          <Typography variant="h2" fontWeight="bold" color="success.main" sx={{ mb: 4 }}>
          COMEÇA AGORA!
        </Typography>
        </Typography>
       
        <Typography variant="h4" sx={{ mb: 3, lineHeight: 3 }}>
          Entre em contato e faça parte do nosso
          <Typography variant="h5" color="success.main" sx={{ mb: 4 }}>time de sucesso.</Typography>
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ 
            mt: 2,
            backgroundColor: "#00C853", 
            color: "white", 
            borderRadius: 5, 
            padding: "16px 32px", 
            fontSize: "1.1rem",
            width: "fit-content"
          }}
        >
          Fale diretamente com um especialista pelo WhatsApp
        </Button>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Ou se preferir, <Typography component="span" fontWeight="bold">agilize o atendimento</Typography> <br /> através da nossa atendente virtual!
          <Typography>
          É esse balãozinho no canto da sua tela!
        </Typography>
        </Typography>
        
      </Box>

      {/* Card do formulário - Ajustado para equilibrar o layout */}
      <Card sx={{ 
        backgroundColor: "#111", 
        padding: 4,
        borderRadius: 3, 
        maxWidth: 450,
        width: "100%",
        height: "auto 0",
        alignSelf: "stretch" // Ocupa mesma altura que a seção de texto
      }}>
        <CardContent sx={{ height: "100%" }}>
        <TextField fullWidth label="Nome" variant="filled" sx={{ mb: 2, backgroundColor: "#222", input: { color: "white" } }} defaultValue="John Smith - Texto de Exemplo" />
          <TextField fullWidth label="Email" variant="filled" sx={{ mb: 2, backgroundColor: "#222", input: { color: "white" } }} />
          <TextField fullWidth label="WhatsApp" variant="filled" sx={{ mb: 2, backgroundColor: "#222", input: { color: "white" } }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Select fullWidth variant="filled" displayEmpty sx={{ backgroundColor: "#222", color: "white" }}>
              <MenuItem disabled>Cidade</MenuItem>
              <MenuItem value="SaoPaulo">São Paulo</MenuItem>
              <MenuItem value="Rio">Rio de Janeiro</MenuItem>
            </Select>
            <Select fullWidth variant="filled" displayEmpty sx={{ backgroundColor: "#222", color: "white" }}>
              <MenuItem disabled>Estado</MenuItem>
              <MenuItem value="SP">SP</MenuItem>
              <MenuItem value="RJ">RJ</MenuItem>
            </Select>
          </Box>
          <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#00C853", color: "white", borderRadius: 5 }}>
            Seja um Franqueado!
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;