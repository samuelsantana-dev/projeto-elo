import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import imgHeader from '../assets/image-header.png';


const BrotegePiso = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${imgHeader})`,
      backgroundSize: 'cover',
      color: '#fff',
      padding: isMobile ? '20px' : '40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
        zIndex: 0,
      }
    }}>
      {/* Conteúdo principal */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        width: '100%'
      }}>
        {/* Título principal */}
        <Typography variant={isMobile ? 'h3' : 'h1'} sx={{
          fontWeight: 'bold',
          color: '#00ff00',
          marginBottom: '20px',
          lineHeight: 1.1,
          textTransform: 'uppercase'
        }}>
          BROTEGE PISO
        </Typography>
        
        {/* Subtítulo */}
        <Typography variant={isMobile ? 'h4' : 'h2'} sx={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '30px',
          lineHeight: 1.2,
          textTransform: 'uppercase'
        }}>
          CONSTRUA SEU SUCESSO
        </Typography>
        
        {/* Descrição */}
        <Typography variant={isMobile ? 'body1' : 'h5'} sx={{
          marginBottom: '40px',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.6
        }}>
          Um modelo consolidado, lucrativo e com alta<br />
          demanda no setor da construção.
        </Typography>
        
        {/* Botão de CTA */}
        <Button variant="contained" sx={{
          backgroundColor: '#00ff00',
          color: '#000',
          fontWeight: 'bold',
          padding: '12px 32px',
          fontSize: isMobile ? '1rem' : '1.2rem',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#00cc00',
            transform: 'scale(1.05)'
          },
          transition: 'all 0.3s ease',
          marginBottom: '40px'
        }}>
          Seja um Franqueado
        </Button>
        
        {/* Rodapé */}
        <Typography variant="body2" sx={{
          color: 'rgba(255,255,255,0.7)',
          fontStyle: 'italic'
        }}>
          Seu em Francesco
        </Typography>
      </Box>
    </Box>
  );
};

export default BrotegePiso;