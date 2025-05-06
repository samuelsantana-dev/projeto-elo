import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  useTheme, 
  useMediaQuery,
} from '@mui/material';
import imgum from '../../assets/Group.png';

interface FranqueadoStepProps {
  number: number;
  title: string;
  description: string;
  width: string;
}

const FranqueadoStep: React.FC<FranqueadoStepProps> = ({
  number,
  title,
  description,
  width
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      display: 'flex', 
      mb: isMobile ? 2 : 3,
      '&:hover': {
        transform: 'translateX(5px)',
        transition: 'transform 0.3s ease'
      }
    }}>
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #2e7d32 0%, #005005 100%)',
          height: isMobile ? 64 : 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          pr: 3,
          color: 'common.white',
          width: width,
          clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)'
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {number}
        </Typography>
      </Box>
      <Box 
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(to right, #f5f5f5 0%, #e8f5e9 100%)',
          px: 3,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4
        }}
      >
        <Box>
          <Typography fontWeight="medium" color="text.primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const steps = [
  {
    number: 1,
    title: 'Preencha o formulário',
    description: 'de interesse.',
    width: '20%'
  },
  {
    number: 2,
    title: 'Converse com nossa',
    description: 'equipe e tire suas dúvidas.',
    width: '30%'
  },
  {
    number: 3,
    title: 'Avaliamos seu perfil e',
    description: 'enviamos a proposta.',
    width: '40%'
  },
  {
    number: 4,
    title: 'Abertura da sua',
    description: 'unidade, treinamento e suporte contínuo.',
    width: '50%'
  },
  {
    number: 5,
    title: 'Começa a faturar',
    description: 'com o Franquia Raíz!',
    width: '60%'
  }
];

const FranchiseStepGuide: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log('isMobile', isMobile);
  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      position: 'relative',
      background: 'linear-gradient(to bottom, #ffffff 0%, #f1f8e9 100%)'
    }}>
      <Container 
        sx={{ 
          py: 6,
          px: { xs: 2, md: 4 },
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box sx={{ 
          width: { xs: '100%', md: '66.666%' },
          mb: { xs: 4, md: 0 },
          pr: { md: 4 }
        }}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              mb: 4,
              lineHeight: 1.2,
              fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
              background: 'linear-gradient(to right, #2e7d32 0%, #005005 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            COMO SE TORNAR<br />UM FRANQUEADO?
          </Typography>
          
          <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
            {steps.map((step) => (
              <FranqueadoStep 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                width={step.width}
              />
            ))}
          </Box>
        </Box>
        
        <Box sx={{ 
          width: { xs: '100%', md: '33.333%' },
          height: {
            xs: 700,   
          },
          position: 'relative',
          display: { xs: 'none', md: 'block' },
          borderRadius: 4,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(46,125,50,0.05) 0%, rgba(0,80,5,0.05) 100%)'
        }}>
        <Box
          component="img"
          src={imgum}
          alt="imagem"
          sx={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 2,
          }}
        />
        </Box>
      </Container>
    </Box>
  );
};

export default FranchiseStepGuide;