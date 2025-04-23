import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Badge, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { green } from '@mui/material/colors';

interface StepData {
  number: number;
  title: string;
  description: string;
  width: number;
}

const franchiseSteps: StepData[] = [
  {
    number: 1,
    title: "Preencha o formulário",
    description: "de interesse.",
    width: 20,
  },
  {
    number: 2,
    title: "Converse com nossa",
    description: "equipe e fique por dentro dos detalhes.",
    width: 30,
  },
  {
    number: 3,
    title: "Avaliamos seu perfil",
    description: "e processo.",
    width: 40,
  },
  {
    number: 4,
    title: "Abertura de sua",
    description: "unidade, treinamento e suporte jurídico.",
    width: 50,
  },
  {
    number: 5,
    title: "Comece a faturar",
    description: "com o Privilégio Total!",
    width: 60,
  },
];

const getGreenShade = (step: number): string => {
  const shades = [
    green[600],  // Step 1
    green[700],  // Step 2
    green[800],  // Step 3
    green[900],  // Step 4
    '#004000'    // Step 5 (custom darker green)
  ];
  return shades[step - 1] || green[600];
};

const FranchiseStepGuide: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps(prev => {
        const newValue = prev + 1;
        if (newValue > franchiseSteps.length) {
          clearInterval(timer);
        }
        return newValue > franchiseSteps.length ? franchiseSteps.length : newValue;
      });
    }, 600);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      bgcolor: 'grey.50',
      overflow: 'hidden'
    }}>
      {/* Pattern Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '33%',
        height: '100%',
        opacity: 0.2,
        zIndex: 0,
        display: { xs: 'none', md: 'block' },
        backgroundImage: 'url(/lovable-uploads/a0577eed-d694-405a-8142-85619ba57795.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right'
      }} />
      
      <Container sx={{ position: 'relative', zIndex: 10, py: 8, px: 4 }}>
        <Typography 
          variant="h3" 
          sx={{
            mb: 6,
            color: 'green.800',
            textTransform: 'uppercase',
            textAlign: { xs: 'center', md: 'left' },
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }
          }}
        >
          Como se Tornar um Franqueado?
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {franchiseSteps.map((step) => (
            <Box 
              key={step.number}
              sx={{
                transition: 'all 700ms ease-in-out',
                width: isMobile ? '100%' : `${step.width + 20}%`,
                maxWidth: '100%',
                opacity: step.number <= visibleSteps ? 1 : 0,
                transform: step.number <= visibleSteps ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <Card 
            sx={{
                p: { xs: 2, md: 3 },
                border: 0,
                color: 'white',
                borderRadius: 0,
                boxShadow: 2,
                '&:hover': { boxShadow: 4 },
                bgcolor: getGreenShade(step.number)
            }}
            >
  <CardContent sx={{ p: '0 !important' }}>
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center', // Align items vertically center
      gap: { xs: 2, md: 3 } // Add consistent spacing
    }}>
        <Badge 
            badgeContent={step.number}
            sx={{
            '& .MuiBadge-badge': {
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 'bold',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                border: 0,
                height: { xs: 32, md: 40 },
                width: { xs: 32, md: 40 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
            }}
        />
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'row', // Horizontal layout
            alignItems: 'center', // Center align vertically
            gap: 1 // Space between title and description
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            {step.title}
            </Typography>
            <Typography variant="body2">
            {step.description}
            </Typography>
        </Box>
        </Box>
    </CardContent>
    </Card>
              
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FranchiseStepGuide;