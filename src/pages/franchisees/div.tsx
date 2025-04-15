import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const OperadorBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '380px',
        height: isMobile ? '220px' : '280px',
        backgroundImage: 'linear-gradient(135deg, #1a1a1a, #333)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        padding: isMobile ? '15px' : '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 24px rgba(0, 255, 0, 0.2)'
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
          zIndex: 0,
        },
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          fontWeight: 800,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          color: '#00ff00'
        }}
      >
        OPERADOR
      </Typography>
      
      <Typography
        variant={isMobile ? "body1" : "h6"}
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          fontWeight: 500
        }}
      >
        Coloque a mão na massa e lidere seu próprio negócio!
      </Typography>
      
      <Button
        variant="contained"
        sx={{
          alignSelf: 'center',
          position: 'relative',
          zIndex: 1,
          fontWeight: 'bold',
          backgroundColor: '#00ff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#00cc00',
            transform: 'scale(1.05)'
          },
          transition: 'all 0.3s ease',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '8px 16px' : '10px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 255, 0, 0.3)'
        }}
      >
        Toque e saiba mais!
      </Button>
    </Box>
  );
};

export default OperadorBanner;