import React, { useState } from 'react';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
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

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00A331",
      width: "100%",
      minHeight: "100vh",
      py: 8,
      px: 2
    }}>
      <Box textAlign="center" mb={6} sx={{ width: '100%', maxWidth: 800 }}>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '2rem', md: '2.5rem' },
            textTransform: 'uppercase'
          }}
        >
          PERGUNTAS FREQUENTES
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 800, display: "flex", flexDirection: "column" }}>
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
                
                padding: "30px 75px"
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: "20 px", fontFamily: "Inter" }}>
                {item.id} - {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ 
              backgroundColor: '#003D12',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              padding: "0 90px",
            }}>
              <Typography sx={{ color: '#FFF', padding: "24px 0", borderTop: "1px solid #FFF" }}>
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