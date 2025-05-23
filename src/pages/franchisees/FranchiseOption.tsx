import React, { useState } from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

const StyledBox = styled(Box)<{ expanded: boolean }>(() => ({
  position: 'relative',
  width: '100%',
  height: '600px',
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
});

interface FranchiseOptionBaseProps {
  imageSrc: string;
  typeLabel: string;
  shortDescription: string;
  longDescription: React.ReactNode;
  bottomNote: string;
  showExtra?: boolean;
}

export const FranchiseOption: React.FC<FranchiseOptionBaseProps> = ({
  imageSrc,
  typeLabel,
  shortDescription,
  longDescription,
  bottomNote,
  showExtra = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const phoneNumber = '16997185553';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <StyledBox expanded={isExpanded}>
      <OptionImage sx={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'top' }} />

      <OptionOverlay>
        <OptionButton onClick={toggleExpand}>{typeLabel}</OptionButton>

        <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          {shortDescription}
        </Typography>

        {isExpanded && (
          <>
            <Box>{longDescription}</Box>

            <Typography sx={{ mt: 2, fontSize: '0.9rem', textAlign: 'center' }}>
              {bottomNote}
            </Typography>
          </>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <LearnMoreButton onClick={toggleExpand}>
            {isExpanded ? 'Mostrar menos' : 'Saiba mais'}
          </LearnMoreButton>
          
          {isExpanded && showExtra && (
            <LearnMoreButton onClick={handleWhatsAppClick}  sx={{ backgroundColor: '#00FF66', padding: '2px', color: '#000', borderRadius: '50px', fontWeight: 'bold' }}>
            Fale com a gente!
          </LearnMoreButton>
        )}
        </Box>

        
      </OptionOverlay>
    </StyledBox>
  );
};
