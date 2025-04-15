import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import imgHeader from '../../assets/image-header.png';
import imgLogo from '../../assets/logo.png';

const BrotegePiso = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundImage: `url(${imgHeader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 35%',
      backgroundRepeat: 'no-repeat',
      color: 'black',
      padding: isMobile ? '20px' : '40px',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        zIndex: 0,
      }
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: isMobile ? '10px 20px' : '20px 20px',
      }}>
     <Typography sx={{
        fontWeight: 'bold',
        color: '#000000',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      }}>
        <img src={imgLogo} alt="logo" style={{ verticalAlign: 'middle', height: '90px', marginRight: '2px' }} />
      </Typography>
        <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none', color: '#000000',  marginRight: '20px' }}>Home</a>
          <span style={{ color: '#000000', fontWeight: 'bold', marginRight: '20px' }}>|</span>
          <a href="/sobre" style={{ textDecoration: 'none', color: '#000000',  marginRight: '20px' }}>Sobre</a>
          <span style={{ color: '#000000', fontWeight: 'bold', marginRight: '20px' }}>|</span>
          <a href="/diferencial" style={{ textDecoration: 'none', color: '#000000',  marginRight: '20px' }}>Diferencial</a>
          <span style={{ color: '#000000', fontWeight: 'bold', marginRight: '20px' }}>|</span>
          <a href="/beneficios" style={{ textDecoration: 'none', color: '#000000',  marginRight: '20px' }}>Benefícios</a>
          <span style={{ color: '#000000', fontWeight: 'bold', marginRight: '20px' }}>|</span>
          <a href="/faq" style={{ textDecoration: 'none', color: '#000000',  marginRight: '20px' }}>FAQ</a>
          <span style={{ color: '#000000', fontWeight: 'bold', marginRight: '20px' }}>|</span>
          <a href="/contato" style={{ textDecoration: 'none', color: '#000000', }}>Contato</a>
        </Box>

        {/* Botões de Ação (Flex Item) */}
        <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center' }}>
          <Button
            variant="outlined"
            color="success"
            sx={{
              borderColor: '#00ff00',
              color: '#000000',
              '&:hover': { borderColor: '#00cc00', backgroundColor: 'rgba(0,204,0,0.1)' },
              marginRight: '20px',
            }}
          >
            Seja um Franqueado
          </Button>
          <Box
            component="a"
            href="https://wa.me/SEU_NUMERO_DE_WHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          >
            <Typography variant="body2">WA</Typography>
          </Box>
        </Box>

        {/* Menu Hamburguer para Mobile (Flex Item) */}
        {isMobile && (
          <Box sx={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '1.5rem' }}>
            ☰
          </Box>
        )}
      </Box>

      {/* Conteúdo principal alinhado à esquerda inferior (Flex Container) */}
      <Box sx={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'left',
        padding: isMobile ? '20px' : '40px',
        zIndex: 1,
      }}>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{
          fontWeight: 'bold',
          color: '#00ff00',
          marginBottom: '16px',
          lineHeight: 1.1,
          textTransform: 'uppercase',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}>
          BROTEGE PISO
        </Typography>
        <Typography variant={isMobile ? 'h5' : 'h4'} sx={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        }}>
          CONSTRUA SEU SUCESSO
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} sx={{
          marginBottom: '30px',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.6,
          fontSize: isMobile ? '1rem' : '1.1rem',
          textShadow: '1px 1px 1px rgba(0,0,0,0.4)',
        }}>
          Um modelo consolidado, lucrativo e com alta demanda no setor da construção.
        </Typography>
        <Button variant="contained" sx={{
          backgroundColor: '#00ff00',
          color: '#000',
          fontWeight: 'bold',
          padding: '12px 32px',
          fontSize: isMobile ? '1rem' : '1.1rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: '#00cc00',
            transform: 'scale(1.05)',
            boxShadow: '0px 6px 12px rgba(0,0,0,0.3)',
          },
          transition: 'all 0.3s ease',
          marginBottom: '20px'
        }}>
          Seja um Franqueado
        </Button>
        <Typography variant="body2" sx={{
          color: 'rgba(255,255,255,0.7)',
          fontStyle: 'italic',
          fontSize: '0.9rem',
          textShadow: '1px 1px 1px rgba(0,0,0,0.3)',
        }}>
          Seu sucesso começa aqui.
        </Typography>
      </Box>

      {/* Gradiente (Flex Item - posicionado no final com flex-grow) */}
      <Box sx={{
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        zIndex: 0,
      }} />
    </Box>
  );
};

export default BrotegePiso;