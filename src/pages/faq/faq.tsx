import React, { useState } from 'react';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './faq.module.css';

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
      }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" component="h1" className={styles.title}>
            PERGUNTAS FREQUENTES
          </Typography>
        </Box>

        {faqItems.map((item) => (
          <Accordion 
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            className={styles.accordion}
            sx={{
              backgroundColor: "#00581A",
              color: "white",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
              className={`${styles.accordionSummary} ${expanded === item.id ? styles.accordionSummaryExpanded : ''}`}
              classes={{ content: styles.accordionSummaryContent }}
            >
              <Typography className={styles.question}>{item.id} - {item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.answer}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
  );
};

export default FAQ;