import React, { useState } from 'react';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Qual o investimento inicial da franquia?',
    answer: 'O investimento inicial varia conforme o modelo de franquia e localização. Entre em contato conosco para obter informações detalhadas sobre os valores específicos para o seu caso.'
  },
  {
    id: 2,
    question: 'Preciso ter experiência no setor?',
    answer: 'Não é necessário ter experiência prévia no setor. Nossa franqueadora oferece treinamento completo para capacitar você a administrar o negócio com sucesso.'
  },
  {
    id: 3,
    question: 'Como funciona o suporte da franqueadora?',
    answer: 'Oferecemos suporte contínuo que inclui treinamento inicial, manuais operacionais, suporte de marketing, assistência técnica e consultoria gerencial durante toda a vigência do contrato.'
  },
  {
    id: 4,
    question: 'Quanto tempo leva para abrir minha franquia?',
    answer: 'O processo de abertura pode levar de 30 a 90 dias, dependendo da localização, adequação do espaço e trâmites legais. Nossa equipe auxilia em todas as etapas para agilizar o processo.'
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log('panel', panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00A331",
      minHeight: "100vh",
      py: isMobile ? 4 : 8,
      px: isMobile ? 1 : 2
    }}>
      <Box textAlign="center" mb={isMobile ? 3 : 6} sx={{ width: '100%', maxWidth: 800, px: isMobile ? 2 : 0 }}>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: isMobile ? '1.5rem' : '2.5rem',
            textTransform: 'uppercase',
            lineHeight: 1.2
          }}
        >
          PERGUNTAS FREQUENTES
        </Typography>
      </Box>

      <Box sx={{ 
        width: '100%', 
        maxWidth: 800,
        px: isMobile ? 1 : 0
      }}>
        {faqItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{
              mb: 2,
              borderRadius: '12px !important',
              overflow: 'hidden',
              '&:before': {
                display: 'none'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: '#003D12',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#005a1a'
                },
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                padding: isMobile ? '16px 20px' : '30px 75px',
                minHeight: 'unset !important'
              }}
            >
              <Typography sx={{ 
                fontWeight: 500, 
                fontSize: isMobile ? '0.9rem' : '1.25rem', 
                fontFamily: "Inter",
                pr: 1
              }}>
                {item.id} - {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ 
              backgroundColor: '#003D12',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              padding: isMobile ? '0 20px' : '0 90px',
            }}>
              <Typography sx={{ 
                color: '#FFF', 
                padding: isMobile ? '16px 0' : '24px 0', 
                borderTop: "1px solid #FFF",
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;