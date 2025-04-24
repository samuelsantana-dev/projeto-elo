import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1CAD32',
  color: theme.palette.common.white,
  minHeight: '100vh',
  padding: theme.spacing(8, 2),
  justifyContent: 'center'
}));

const HighlightNumber = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: theme.typography.fontWeightBold,
  margin: theme.spacing(1, 0),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: theme.typography.fontWeightRegular,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const AwardText = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.common.white,
  opacity: 0.7,
  marginTop: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
}));

const hrStyle = {
  border: '1px solid #fff',
  width: '60%',
  marginTop: '24px',
  marginBottom: '24px',
};

export function On() {
  return (
    <HeroSection>
      <Container maxWidth="md" sx={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
        <Typography variant="h5" gutterBottom sx={{  textAlign: 'center' }}>
          Desde de 2005, a Protege e Piso é referência nacional
          <br />
          em proteção técnica de superfícies durante obras e reformas.
        </Typography>
        <hr style={hrStyle} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 4,
            gap: theme => theme.spacing(4),
          }}
        >
          <Box sx={{   textAlign: 'center' }}>
            <HighlightNumber>70+</HighlightNumber>
            <HighlightText>franquias no Brasil e EUA</HighlightText>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <HighlightNumber>10 mil+</HighlightNumber>
            <HighlightText>Obras protegidas</HighlightText>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <HighlightNumber>Modelo</HighlightNumber>
            <HighlightText>de Negócios consolidado e escalável</HighlightText>
          </Box>
        </Box>

        <hr style={hrStyle} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: theme => theme.spacing(2),
          }}
        >
          <Box sx={{ textAlign: 'center', flex: '1 1 auto' }}>
            <AwardText>Prêmio Objeto Brasil 2016 - Categoria Design Construção Civil</AwardText>
          </Box>
          <Box sx={{ textAlign: 'center', flex: '1 1 auto' }}>
            <AwardText>Produto patenteado e marca registrada</AwardText>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
}