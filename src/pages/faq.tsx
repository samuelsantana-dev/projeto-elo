import React, { useState } from 'react';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          PERGUNTAS FREQUENTES
        </Typography>
      </Box>

      {faqItems.map((item) => (
        <Accordion 
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{ 
            mb: 2,
            '&:before': {
              display: 'none' // Remove a linha padrão do Accordion
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            sx={{
              backgroundColor: expanded === item.id ? '#f5f5f5' : 'white',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <Typography fontWeight={600}>{item.id} - {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;