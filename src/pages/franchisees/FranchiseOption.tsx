import React, { useState } from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

interface FranchiseOptionProps {
  type: 'OPERADOR' | 'INVESTIDOR';
  imageSrc: string;
}

const StyledBox = styled(Box)<{ expanded: boolean }>(({ expanded }) => ({
  position: 'relative',
  width: '100%',
  height: expanded ? 'auto' : '600px',
  borderRadius: '24px',
  overflow: 'hidden',
  transition: 'all 0.4s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const OptionButton = styled(Button)({
  backgroundColor: 'transparent',
  border: '2px solid #00FF66',
  borderRadius: '50px',
  color: '#00FF66',
  padding: '8px 32px',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 255, 102, 0.1)',
  },
});

const OptionImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.8)',
  borderRadius: '24px',
  position: 'absolute',
  top: 0,
  left: 0,
});

const OptionOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '20px',
  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '30px',
});

const LearnMoreButton = styled(Button)({
  color: '#00FF66',
  borderBottom: '1px solid #00FF66',
  borderRadius: 0,
  padding: '5px 0',
  margin: '15px 0',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
});

export const FranchiseOption: React.FC<FranchiseOptionProps> = ({ type, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const phoneNumber = '16997185553';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };


  return (
    <StyledBox expanded={isExpanded}>
      <OptionImage sx={{ backgroundImage: `url(${imageSrc})` }} />

      <OptionOverlay>
        <OptionButton>{type}</OptionButton>

        <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          {type === 'INVESTIDOR'
            ? 'Se você busca um modelo de renda passiva...'
            : 'Se você tem perfil empreendedor, gosta de desafios e quer ter um negócio próprio com alta rentabilidade...'}
        </Typography>

        {isExpanded && (
          <>
            <ul style={{ textAlign: 'left', marginTop: 20 }}>
              {type === 'INVESTIDOR' ? (
                <>
                  <li>Gestão operacional delegada a um time especializado</li>
                  <li>Receita recorrente e excelente rentabilidade</li>
                  <li>Possibilidade de expansão mesmo sem atuação presencial</li>
                  <li>Apoio da matriz para otimizar os processos</li>
                </>
              ) : (
                <>
                  <li>Baixo investimento inicial e retorno acelerado</li>
                  <li>Controle total da operação</li>
                  <li>Alta demanda no setor</li>
                  <li>Suporte completo da matriz para capacitação e crescimento</li>
                </>
              )}
            </ul>

            <Typography sx={{ mt: 2, fontSize: '0.9rem', textAlign: 'center' }}>
              {type === 'INVESTIDOR'
                ? 'Ideal para quem deseja retorno sólido sem gestão direta.'
                : 'Este modelo é para quem quer fazer acontecer e garantir um crescimento sólido no setor de proteção de pisos.'}
            </Typography>
          </>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <LearnMoreButton onClick={toggleExpand}>
            {isExpanded ? 'Mostrar menos' : 'Saiba mais'}
          </LearnMoreButton>

          {isExpanded && (
            <Button
              variant="contained"
              sx={{ backgroundColor: '#00FF66', color: '#000', fontWeight: 'bold' }}
              onClick={handleWhatsAppClick}
            >
              Fale com a gente!
            </Button>
          )}
        </Box>

        {isExpanded && type === 'INVESTIDOR' && (
          <Box mt={4} p={2} bgcolor="#111" borderRadius="16px">
            <Typography variant="body2" sx={{ color: '#00FF66' }}>
              Conheça também nosso modelo de <strong>Investidor Crypto</strong>
            </Typography>
            <Button variant="outlined" sx={{ mt: 1, color: '#00FF66', borderColor: '#00FF66' }} onClick={handleWhatsAppClick} >
              Saiba mais!
            </Button>
          </Box>
        )}
      </OptionOverlay>
    </StyledBox>
  );
};
