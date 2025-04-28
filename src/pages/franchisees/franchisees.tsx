import React from 'react';
import { Container, Typography, Box, styled } from '@mui/material';
import {FranchiseOption} from './FranchiseOption';
import imgFranUm from '../../assets/image-investidor-um.png';
import imgFranDois from '../../assets/image-investidor-dois.png';

const PageContainer = styled(Box)({
  backgroundColor: '#000000',
  color: 'white',
  minHeight: '100vh',
  paddingTop: '40px',
  paddingBottom: '60px',
});

const Title = styled(Typography)({
  color: '#00FF66',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '10px',
});

const Subtitle = styled(Typography)({
  color: 'white',
  textAlign: 'center',
  fontSize: '1.2rem',
  marginBottom: '40px',
});

const InfoBox = styled(Box)(() => ({
  border: '2px solid #00FF66',
  borderRadius: '50px',
  padding: '15px 25px',
  textAlign: 'center',
  margin: '0 auto 50px',
  maxWidth: '900px',
}));

const OptionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const HighlightText = styled('span')({
  color: '#00FF66',
});

export const FranchisePage: React.FC = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Title variant="h1">
          VENHA SER <HighlightText>UM FRANQUEADO!</HighlightText>
        </Title>
        
        <Subtitle variant="h2">
          Escolha o modelo ideal para você:
        </Subtitle>
        
        <InfoBox>
          <Typography variant="body1">
            Dois formatos de franquia, um mesmo sucesso. <strong>Passe o mouse sobre as opções abaixo para ver os detalhes</strong> e descubra qual faz mais sentido para você.
          </Typography>
        </InfoBox>
        
        <OptionsContainer>
          <FranchiseOption 
            type="OPERADOR" 
            imageSrc={imgFranUm}
            description="Coloque a mão na massa e lidere seu próprio negócio!"
          />
          <FranchiseOption 
            type="INVESTIDOR" 
            imageSrc={imgFranDois} 
            description="Expanda seu patrimônio sem precisar atuar diretamente no negócio!"
          />
        </OptionsContainer>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Seja qual for seu perfil, há um modelo de negócio ideal para você!
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 1 }}>
            Vamos conversar e definir qual é o melhor caminho
            para você entrar nesse <HighlightText>mercado de alto potencial!</HighlightText>
          </Typography>
        </Box>
      </Container>
    </PageContainer>
  );
};