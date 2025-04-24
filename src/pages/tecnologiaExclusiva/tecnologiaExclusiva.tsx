import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { Tooltip } from '@mui/material';

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

const RotatedSquare = styled(Paper)(() => ({
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

const CircleWithHover = styled(Box)({
  position: 'relative',
  '&:hover .hover-content': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0)',
  },
});

const HoverContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%) translateY(10px)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  width: 280, 
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  zIndex: 1,
  marginBottom: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HoverImage = styled('img')({
  width: '100%',
  height: 120,
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '12px',
});

// Dados dos itens (incluindo caminhos das imagens)
const items = [
  {
    title: 'Cocho de retenção de resíduos',
    description: 'Solução eficaz na retenção de líquidos e sujeira, preservando pisos e superfícies.',
    image: '/images/cocho.jpg' // Substitua pelo caminho real da sua imagem
  },
  // Adicione os outros 3 itens com suas respectivas imagens
  {
    title: 'Sistema Modular',
    description: 'Facilidade de instalação e manutenção com design modular.',
    image: '/images/modular.jpg'
  },
  // ... mais itens
];


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
          <Grid container spacing={1} sx={{ mt: 4, display: 'flex' }}>
            {items.map((item, index) => (
              <Box key={index} sx={{ flexShrink: 0, p: 0.5 }}>
                <CircleWithHover>
                  <CircleItem elevation={3}>
                    <InnerCircle>
                      <SmallCircle />
                    </InnerCircle>
                  </CircleItem>
                  <HoverContent className="hover-content">
                    <HoverImage 
                      src={item.image} 
                      alt={item.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                    />
                    <Typography variant="body1" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      {item.description}
                    </Typography>
                  </HoverContent>
                </CircleWithHover>
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