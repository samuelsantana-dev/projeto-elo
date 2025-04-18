// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { JSX } from "react";

const BoxComponent = (): JSX.Element => {

  return (  
    <div style={{ display: 'flex', flexDirection: 'column', background: '#00581A', alignItems: 'center' }}>
    {/* Seção principal do rodapé */}
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', width: '100%', color: 'white' }}>
      
      {/* Descubra */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3>Descubra</h3>
        <span>Site Principal</span>
        <span>Unidades</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
  
      {/* Termos e Licenças */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3>Termos e Licenças</h3>
        <span>Política de Privacidade</span>
        <span>Termos de Serviço</span>
      </div>
  
      {/* Contatos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3>Contatos</h3>
        <span>(16) 99718-5553</span>
        <span>(16) 3911-3911</span>
        <span>comercial@protegepiso.com.br</span>
        <span>Av. Maurílio Biagi, 800, Ribeirânia - Ribeirão Preto/SP</span>
      </div>
    </div>
  
    {/* Linha separadora */}
    <div style={{ width: '80%', height: '1px', background: 'white', margin: '20px 0' }}></div>
  
    {/* Direitos reservados */}
    <div style={{ textAlign: 'center', color: 'white' }}>
      Todos os direitos reservados © 2025
    </div>
  </div>
  
  );
};

export default BoxComponent;
