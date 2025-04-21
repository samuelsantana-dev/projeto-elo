import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import InfoBanner from "./div";

const Franchisee = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      padding: isMobile ? '20px' : '40px',
      color: 'white',
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0
    }}>
      {/* Cabeçalho */}
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        sx={{ 
          color: "#00ff00", 
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          lineHeight: 1.2
        }}
      >
        VENHA SER <Box component="span" sx={{ fontWeight: 900 }}>UM FRANQUEADO!</Box>
      </Typography>
      
      <Typography 
        variant={isMobile ? "body1" : "subtitle1"} 
        sx={{ 
          textAlign: "center",
          marginBottom: "20px",
          color: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        Escolha o modelo ideal para você:
      </Typography>
      
      <Typography 
        variant="body2" 
        sx={{ 
          background: "#222", 
          padding: isMobile ? '12px' : '15px',
          borderRadius: "10px", 
          display: "inline-block",
          maxWidth: '800px',
          margin: '0 auto 40px',
          textAlign: 'center',
          width: '90%',
          boxShadow: '0 4px 6px rgba(0, 255, 0, 0.1)',
          border: '1px solid rgba(0, 255, 0, 0.1)'
        }}
      >
        Dois formatos de franquia, um mesmo sucesso. <Box component="span" sx={{ fontWeight: 600 }}>Passe o mouse sobre as opções abaixo</Box> para ver os detalhes e descubra qual faz mais sentido para você.
      </Typography>
      
      <Container 
        maxWidth="lg"
        sx={{ 
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px", // Espaço consistente entre os banners
          padding: isMobile ? '0' : '20px',
          marginBottom: '40px',
          width: '100%'
        }}
      >
        <InfoBanner title={"OPERADOR"} shortDescription={"Coloque a mão na massa e lidere seu próprio negócio!"} buttonText={"Toque e saiba mais!"}   longDescription="Esta é uma descrição muito mais longa que será exibida quando o banner for clicado e expandido. Você pode incluir mais detalhes e informações relevantes aqui." />
        <InfoBanner title={"INVESTIDOR"} shortDescription={"Expanda seu patrimônio sem precisar atuar diretamente no negócio!"} buttonText={"Toque e saiba mais!"}   longDescription="Esta é uma descrição muito mais longa que será exibida quando o banner for clicado e expandido. Você pode incluir mais detalhes e informações relevantes aqui."   backgroundColor="lightblue"
        />
      </Container>
      
      {/* Rodapé */}
      <Typography 
        variant={isMobile ? "body1" : "h6"} 
        sx={{ 
          textAlign: "center",
          marginBottom: "20px",
          maxWidth: '800px',
          padding: isMobile ? '0 10px' : '0',
          color: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        Seja qual for seu perfil, há um modelo de negócio ideal para você!
      </Typography>
      
      <Typography 
        variant={isMobile ? "body1" : "h6"} 
        sx={{ 
          fontWeight: "bold", 
          color: "#00ff00",
          textAlign: "center",
          maxWidth: '800px',
          margin: '0 auto',
          padding: isMobile ? '0 10px' : '0',
          lineHeight: 1.4
        }}
      >
        Vamos conversar e definir qual é o melhor caminho para você entrar nesse <Box component="span" sx={{ fontWeight: 900 }}>mercado de alto potencial!</Box>
      </Typography>
    </Box>
  );
};

export default Franchisee;