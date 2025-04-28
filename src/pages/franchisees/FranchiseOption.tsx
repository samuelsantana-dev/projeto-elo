import React, { useState } from 'react';
 import { Box, Typography, Button, styled } from '@mui/material';

 interface FranchiseOptionProps {
  type: 'OPERADOR' | 'INVESTIDOR';
  imageSrc: string;
  description: string;
 }

 const StyledBox = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '24px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
   transform: 'scale(1.02)',
  },
 }));

 const OptionButton = styled(Button)(() => ({
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
 }));

 const OptionImage = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.8)',
  borderRadius: '24px',
  // height: '600px', // Increased height here
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

 export const FranchiseOption: React.FC<FranchiseOptionProps> = ({ type, imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log('isHovered', isHovered);
  return (
   <StyledBox 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
   >
    <OptionImage 
     sx={{ 
      backgroundImage: `url(${imageSrc})`,
      height: '600px' 
     }} 
    />
    <OptionOverlay>
     <OptionButton>{type}</OptionButton>
     <Typography 
      variant="body1" 
      sx={{ 
       mt: 2, 
       textAlign: 'center', 
       fontSize: '0.9rem',
       maxWidth: '80%' 
      }}
     >
      {description}
     </Typography>
     <LearnMoreButton>
      Saiba mais
     </LearnMoreButton>
    </OptionOverlay>
   </StyledBox>
  );
 };