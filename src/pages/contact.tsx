import { TextField, Button, Select, MenuItem, Card, CardContent, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#000" }}>
      <Box sx={{ color: "white", maxWidth: 600, textAlign: "left", pr: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          SEU FUTURO COMO FRANQUEADO
        </Typography>
        <Typography variant="h3" fontWeight="bold" color="success.main">
          COMEÇA AGORA!
        </Typography>
        <Typography variant="body1" mt={2}>
          Entre em contato e faça parte do nosso <Typography component="span" color="success.main">time de sucesso.</Typography>
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3, backgroundColor: "#00C853", color: "white", borderRadius: 5, padding: "10px 20px", textTransform: "none" }}
        >
          Fale diretamente com um especialista pelo WhatsApp
        </Button>
        <Typography variant="body2" mt={2}>
          Ou se preferir, <Typography component="span" fontWeight="bold">agilize o atendimento</Typography> através da nossa atendente virtual!
        </Typography>
      </Box>
      <Card sx={{ backgroundColor: "#111", padding: 3, borderRadius: 3, maxWidth: 400 }}>
        <CardContent>
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
