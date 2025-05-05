import { Box, Typography, Button, useTheme, useMediaQuery, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import imgHeader from '../../assets/image-header.png';
import imgLogo from '../../assets/logo.png';

const BrotegePiso = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const phoneNumber = '16997185553';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Diferencial', path: '/diferencial' },
    { name: 'Benefícios', path: '/beneficios' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contato', path: '/contato' }
  ];

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
      position: 'relative',
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
      {/* Header/Navigation */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: isMobile ? '10px 0' : '20px 0',
        zIndex: 1,
      }}>
        <Typography sx={{
          fontWeight: 'bold',
          color: '#000000',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        }}>
          <img 
            src={imgLogo} 
            alt="logo" 
            style={{ 
              verticalAlign: 'middle', 
              height: isMobile ? '70px' : '90px', 
              marginRight: '2px' 
            }} 
          />
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ 
          display: { xs: 'none', sm: 'flex' }, 
          alignItems: 'center',
          gap: '8px'
        }}>
          {navLinks.map((link, index) => (
            <Box key={link.name} sx={{ display: 'flex', alignItems: 'center' }}>
              <a href={link.path} style={{ 
                textDecoration: 'none', 
                color: '#000000', 
                marginRight: '8px',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                whiteSpace: 'nowrap'
              }}>
                {link.name}
              </a>
              {index < navLinks.length - 1 && (
                <span style={{ color: '#000000', fontWeight: 'bold' }}>|</span>
              )}
            </Box>
          ))}
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{ 
          display: { xs: 'none', sm: 'flex' }, 
          alignItems: 'center',
          gap: '10px'
        }}>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#00ff00',
              color: '#fff',
              fontWeight: 'bold',
              padding: '10px 12px',
              fontSize: '0.8rem',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#00cc00',
                transform: 'scale(1.05)',
                boxShadow: '0px 6px 12px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              minWidth: 'max-content'
            }}  
            onClick={handleWhatsAppClick}
          >
            Seja um Franqueado
          </Button>
          
          <IconButton
            onClick={handleWhatsAppClick}
            sx={{
              width: '44px',
              height: '44px',
              backgroundColor: '#25D366',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </IconButton>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { xs: 'flex', sm: 'none' },
            color: '#000',
            marginLeft: 'auto'
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: '300px',
            backgroundColor: 'rgba(0,0,0,0.9)',
            padding: '20px',
            boxSizing: 'border-box'
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: '#fff',
                  padding: '15px 0',
                  fontSize: '1.1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={handleDrawerToggle}
              >
                {link.name}
              </a>
            ))}
          </Box>
          
          <Box sx={{ marginTop: 'auto', paddingTop: '20px' }}>
            <Button 
              fullWidth
              variant="contained" 
              sx={{
                backgroundColor: '#00ff00',
                color: '#000',
                fontWeight: 'bold',
                padding: '12px',
                fontSize: '1rem',
                borderRadius: '8px',
                marginBottom: '15px',
                '&:hover': {
                  backgroundColor: '#00cc00',
                }
              }}  
              onClick={handleWhatsAppClick}
            >
              Seja um Franqueado
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{
        maxWidth: { xs: '100%', sm: '600px' },
        width: '100%',
        textAlign: 'left',
        padding: { xs: '20px 0', sm: '40px' },
        zIndex: 1,
        marginTop: { xs: '40px', sm: '0' }
      }}>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{
          fontWeight: 'bold',
          color: '#00ff00',
          marginBottom: '16px',
          lineHeight: 1.1,
          textTransform: 'uppercase',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          fontSize: { xs: '1.8rem', sm: '2.5rem' }
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
          fontSize: { xs: '1.5rem', sm: '2rem' }
        }}>
          CONSTRUA SEU SUCESSO
        </Typography>
        <Typography sx={{
          marginBottom: '30px',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.6,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          textShadow: '1px 1px 1px rgba(0,0,0,0.4)',
        }}>
          Um modelo consolidado, lucrativo e com alta demanda no setor da construção.
        </Typography>
        <Button 
          variant="contained" 
          sx={{
            backgroundColor: '#00ff00',
            color: '#000',
            fontWeight: 'bold',
            padding: { xs: '10px 24px', sm: '12px 32px' },
            fontSize: { xs: '1rem', sm: '1.1rem' },
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: '#00cc00',
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 12px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s ease',
            marginBottom: '20px'
          }}  
          onClick={handleWhatsAppClick}
        >
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

      {/* Gradient Overlay */}
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