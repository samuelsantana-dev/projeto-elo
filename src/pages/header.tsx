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
      justifyContent: 'flex-end', // Alinha conteúdo na parte inferior
      alignItems: 'flex-start', // Alinha conteúdo à esquerda
      backgroundImage: `url(${imgHeader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding: isMobile ? '20px' : '40px',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '40%', // Gradiente apenas na parte inferior
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        zIndex: 0,
      }
    }}>
      {/* Conteúdo principal alinhado à esquerda inferior */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '600px',
        width: '100%',
        textAlign: 'left', // Alinhamento de texto à esquerda
        marginBottom: isMobile ? '20px' : '40px'
      }}>
        {/* Título principal */}
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{
          fontWeight: 'bold',
          color: '#00ff00',
          marginBottom: '16px',
          lineHeight: 1.1,
          textTransform: 'uppercase'
        }}>
          BROTEGE PISO
        </Typography>
        
        {/* Subtítulo */}
        <Typography variant={isMobile ? 'h5' : 'h4'} sx={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
          lineHeight: 1.2,
          textTransform: 'uppercase'
        }}>
          CONSTRUA SEU SUCESSO
        </Typography>
        
        {/* Descrição */}
        <Typography variant={isMobile ? 'body1' : 'h6'} sx={{
          marginBottom: '30px',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.6
        }}>
          Um modelo consolidado, lucrativo e com alta demanda no setor da construção.
        </Typography>
        
        {/* Botão de CTA */}
        <Button variant="contained" sx={{
          backgroundColor: '#00ff00',
          color: '#000',
          fontWeight: 'bold',
          padding: '12px 32px',
          fontSize: isMobile ? '1rem' : '1.1rem',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#00cc00',
            transform: 'scale(1.05)'
          },
          transition: 'all 0.3s ease',
          marginBottom: '20px'
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