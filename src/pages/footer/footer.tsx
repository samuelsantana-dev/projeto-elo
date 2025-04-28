import { JSX } from "react";
import { AiFillInstagram, AiFillFacebook, AiOutlineMail, AiFillPhone, AiFillEnvironment } from "react-icons/ai";

const BoxComponent = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: '#00581A', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', width: '100%', color: 'white', padding: '20px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <h3>Descubra</h3>
          <span>Site Principal</span>
          <span>Unidades</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiFillInstagram size={24} />
            Instagram
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiFillFacebook size={24} />
            Facebook
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <h3>Termos e Licenças</h3>
          <span>Política de Privacidade</span>
          <span>Termos de Serviço</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <h3>Contatos</h3>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiFillPhone size={18} />
            (16) 99718-5553
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiFillPhone size={18} />
            (16) 3911-3911
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiOutlineMail size={18} />
            comercial@protegepiso.com.br
          </span>
          <span style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
            <AiFillEnvironment size={18} />
            Av. Maurílio Biagi, 800, Ribeirânia - Ribeirão Preto/SP
          </span>
        </div>
      </div>

      <div style={{ width: '80%', height: '1px', background: 'white', margin: '20px 0' }}></div>

      <div style={{ textAlign: 'center', color: 'white' }}>
        Todos os direitos reservados © 2025
      </div>
    </div>
  );
};

export default BoxComponent;