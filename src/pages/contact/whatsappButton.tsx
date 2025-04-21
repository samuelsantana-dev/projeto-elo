import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/system';

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

const StyledWhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#05973b',
  color: '#FFFFFF',
  borderRadius: theme.spacing(6),
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    backgroundColor: '#128C7E',
  },
  maxWidth: '400px',
}));

const WhatsAppIconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(6),
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(1.5),
  minWidth: '40px',
  minHeight: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const WhatsAppButtonMUI: React.FC<WhatsAppButtonProps> = ({ phoneNumber = "5511999999999" }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <StyledWhatsAppButton onClick={handleWhatsAppClick}>
      <WhatsAppIconWrapper>
        <WhatsAppIcon sx={{ color: '#00ff00', fontSize: '1.4rem' }} /> 
      </WhatsAppIconWrapper>
      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
        Fale diretamente com um especialista{" "}
        <Typography component="span" sx={{ color: '#00ff00', fontWeight: 'bold' }}>
          pelo WhatsApp
        </Typography>
      </Typography>
    </StyledWhatsAppButton>
  );
};

export default WhatsAppButtonMUI;