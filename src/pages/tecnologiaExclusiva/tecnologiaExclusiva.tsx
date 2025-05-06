import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageMap from './imageMap';
import imageAltoEsquerda from '../../assets/tecnologiaExclusiva/image-alto-esquerda.png';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #e8f5e9, #c8e6c9)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  position: 'relative',
}));

const RotatedSquare = styled(Paper)(({ theme }) => ({
  width: 128,
  height: 128,
  background: `url(${imageAltoEsquerda}) no-repeat center center`,
  backgroundSize: 'cover',
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 80,
  },
}));

const FloatingCircle = styled(Paper)(({ theme }) => ({
  width: 96,
  height: 96,
  borderRadius: '50%',
  position: 'absolute',
  bottom: -32,
  right: -32,
  background: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    bottom: -24,
    right: -24,
  },
}));

const TecnologiaExclusiva = () => {
  return (
    <GradientBackground>
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" color="primary" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            Tecnologia Exclusiva
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto', px: 2 }}>
            A Protege-Piso desenvolve sua própria tecnologia exclusiva
            de ponta para melhor atender seus clientes
          </Typography>
        </Box>

        <Box position="relative" maxWidth={480} mx="auto" sx={{ width: '100%' }}>
          <Grid container spacing={1} sx={{ mt: 4, justifyContent: 'center' }}>
            <ImageMap />
          </Grid>
          <FloatingCircle elevation={3}>
            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              E
            </Typography>
          </FloatingCircle>
        </Box>
      </Container>

      <RotatedSquare
        elevation={3}
        sx={{
          top: 16,
          left: 16,
          transform: 'rotate(-12deg)',
        }}
      />
      <RotatedSquare
        elevation={3}
        sx={{
          bottom: 16,
          right: 16,
          transform: 'rotate(12deg)',
        }}
      />
    </GradientBackground>
  );
};

export default TecnologiaExclusiva;
