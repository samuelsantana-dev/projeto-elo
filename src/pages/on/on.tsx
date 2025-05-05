/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1CAD32',
  color: theme.palette.common.white,
  minHeight: '100vh',
  padding: theme.spacing(8, 2),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 2),
  },
}));

const HighlightNumber = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: theme.typography.fontWeightBold,
  margin: theme.spacing(1, 0),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const HighlightText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: theme.typography.fontWeightRegular,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.3,
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
    marginTop: theme.spacing(1),
  },
}));

const hrStyle = (theme: any) => ({
  border: '1px solid #fff',
  width: '60%',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

export function On() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeroSection>
      <Container maxWidth="md" sx={{ 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        px: isSmallScreen ? 1 : 2,
      }}>
        <Typography 
          variant={isSmallScreen ? "h6" : "h5"} 
          gutterBottom 
          sx={{  
            textAlign: 'center',
            lineHeight: 1.4,
            mb: isSmallScreen ? 2 : 3,
          }}
        >
          Desde de 2005, a Protege e Piso é referência nacional
          <br />
          em proteção técnica de superfícies durante obras e reformas.
        </Typography>
        
        <Box sx={hrStyle(theme)} />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: isSmallScreen ? 2 : 4,
            gap: theme => theme.spacing(isSmallScreen ? 1 : 4),
            flexDirection: isSmallScreen ? 'column' : 'row',
            width: '100%',
          }}
        >
          <Box sx={{ textAlign: 'center', flex: isSmallScreen ? '0 1 auto' : 1 }}>
            <HighlightNumber>70+</HighlightNumber>
            <HighlightText>franquias no Brasil e EUA</HighlightText>
          </Box>
          
          {!isSmallScreen && <Box sx={hrStyle(theme)} />}
          
          <Box sx={{ textAlign: 'center', flex: isSmallScreen ? '0 1 auto' : 1 }}>
            <HighlightNumber>10 mil+</HighlightNumber>
            <HighlightText>Obras protegidas</HighlightText>
          </Box>
          
          {!isSmallScreen && <Box sx={hrStyle(theme)} />}
          
          <Box sx={{ 
            textAlign: 'center', 
            flex: isSmallScreen ? '0 1 auto' : 1,
            mt: isSmallScreen ? 2 : 0
          }}>
            <HighlightNumber>Modelo</HighlightNumber>
            <HighlightText>de Negócios consolidado e escalável</HighlightText>
          </Box>
        </Box>

        <Box sx={hrStyle(theme)} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: theme => theme.spacing(isSmallScreen ? 1 : 2),
            width: '100%',
          }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            flex: isSmallScreen ? '1 1 100%' : '1 1 auto',
            mb: isSmallScreen ? 1 : 0
          }}>
            <AwardText>Prêmio Objeto Brasil 2016 - Categoria Design Construção Civil</AwardText>
          </Box>
          <Box sx={{ 
            textAlign: 'center', 
            flex: isSmallScreen ? '1 1 100%' : '1 1 auto' 
          }}>
            <AwardText>Produto patenteado e marca registrada</AwardText>
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
}