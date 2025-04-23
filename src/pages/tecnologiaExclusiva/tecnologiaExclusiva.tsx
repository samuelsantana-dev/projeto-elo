import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #e8f5e9, #c8e6c9)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  position: 'relative',
});

const RotatedSquare = styled(Paper)(({ theme }) => ({
  width: 128,
  height: 128,
  background: '#333',
  position: 'absolute',
}));

const CircleItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#333',
  borderRadius: theme.shape.borderRadius,
  transform: 'rotate(3deg)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'rotate(0deg)',
  },
}));

const InnerCircle = styled(Box)({
  width: '100%',
  height: '100%',
  background: '#424242',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const SmallCircle = styled(Box)({
  width: 48,
  height: 48,
  background: '#616161',
  borderRadius: '50%',
});

const FloatingCircle = styled(Paper)({
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
});

const TecnologiaExclusiva = () => {
  return (  
    <GradientBackground>
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Tecnologia Exclusiva
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto' }}>
            A Protege-Te desenvolve sua própria tecnologia exclusiva
            de ponta para melhor atender seus clientes
          </Typography>
        </Box>

        <Box position="relative" maxWidth={480} mx="auto">
        <Grid container spacing={1}>
            {[...Array(4)].map((_, index) => (
                <Box key={index} sx={{ width: { xs: '50%' }, p: 0.5 }}>
                <CircleItem elevation={3}>
                    <InnerCircle>
                    <SmallCircle />
                    </InnerCircle>
                </CircleItem>
                </Box>
            ))}
            </Grid>
          <FloatingCircle elevation={3}>
            <Typography variant="h4" color="primary" fontWeight="bold">
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