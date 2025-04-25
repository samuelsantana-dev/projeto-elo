import { Box, Typography, Paper, styled } from '@mui/material';
import imageMolas from '../../assets/tecnologiaExclusiva/image-molas.jpg';
import imageCocho from '../../assets/tecnologiaExclusiva/image-cocho.jpg';
import imageSuperficie from '../../assets/tecnologiaExclusiva/image-superficie.jpg';
import imageAngulo from '../../assets/tecnologiaExclusiva/image-angulo.png';
import imagePecasAgrupadas from '../../assets/tecnologiaExclusiva/pecas-agrupadas.png';
import imageAssimetricos from '../../assets/tecnologiaExclusiva/image-assimetricos.jpg';
import { useState } from 'react';

interface HotspotItem {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
  image?: string;
}

const hotspots: HotspotItem[] = [
  { id: 1, x: 15, y: 15, title: "Superfície com Grips Antiderrapantes", description: "Os vincos na placa ajudam a manter a estabilidade, evitando acidentes, mesmo com a superfície molhada ou em áreas inclinadas.", image: imageSuperficie },
  { id: 2, x: 45, y: 15, title: "Ponto 2", description: "Descrição para o ponto 2", image: '' },
  { id: 3, x: 75, y: 15, title: "Cocho de retenção de resíduos", description: "Solução eficaz na retenção de líquidos e sujeira, preservando pisos e superfícies.", image: imageCocho },
  { id: 4, x: 15, y: 45, title: "Superfície em Ângulo", description: "A geometria encaminha os resíduos, facilitando a limpeza e a apresentação.", image: imageAngulo },
  { id: 5, x: 45, y: 45, title: "Encaixes Assimétricos", description: "Sistema de encaixe inteligente, dispensando o uso de adesivos e facilitando a instalação.", image: imageAssimetricos },
  { id: 6, x: 75, y: 45, title: "Molas de ampliação", description: "Alta resistência a impactos, abrasão e fluxo intenso de pessoas e máquinas.", image: imageMolas },
];
const HotspotButton = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(4px)',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HotspotDot = styled(Box)({
  width: 8,
  height: 8,
  backgroundColor: 'white',
  borderRadius: '50%',
});

interface HotspotInfoProps extends React.ComponentProps<typeof Paper> {
  visible: boolean;
  positionBelow?: boolean;
}

const HotspotInfo = styled(Paper, { shouldForwardProp: (prop) => prop !== 'visible' && prop !== 'positionBelow' })<HotspotInfoProps>(({ theme, visible, positionBelow }) => ({
  position: 'absolute',
  left: '50%',
  opacity: visible ? 1 : 0,
  transform: 'translateX(-50%)',
  width: 256,
  maxWidth: '90vw',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(8px)',
  color: 'white',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  pointerEvents: 'none',
  zIndex: 1,
  ...(positionBelow
    ? {
        top: 'calc(100% + 8px)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-6px',
          left: '50%',
          transform: 'translateX(-50%) rotate(-45deg)',
          width: 12,
          height: 12,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: -1,
        },
      }
    : {
        bottom: 'calc(100% + 8px)',
        marginBottom: theme.spacing(1),
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: 12,
          height: 12,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: -1,
        },
      }),
}));

const ImageMap = () => {
  const [hoveredHotspotId, setHoveredHotspotId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredHotspotId(id);
  };

  const handleMouseLeave = () => {
    setHoveredHotspotId(null);
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: '2xl', mx: 'auto' }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={imagePecasAgrupadas}
          alt="Mapa Interativo"
          sx={{ width: '100%', height: 'auto' }}
        />

        {hotspots.map((hotspot) => (
          <Box
            key={hotspot.id}
            sx={{
              position: 'absolute',
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => handleMouseEnter(hotspot.id)}
            onMouseLeave={handleMouseLeave}
          >
            <HotspotButton>
              <HotspotDot />
            </HotspotButton>
            <HotspotInfo
              elevation={3}
              visible={hoveredHotspotId === hotspot.id}
              positionBelow={hotspot.y >= 50 || [4, 5, 6].includes(hotspot.id)} // Condição para exibir abaixo
            >
              <Box sx={{ p: 1.5 }}>
                {hotspot.image && (
                  <Box
                    component="img"
                    src={hotspot.image}
                    alt={hotspot.title}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      maxHeight: 180,
                      objectFit: 'contain',
                      mb: 1.5,
                      borderRadius: 1,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: 2,
                      transition: 'opacity 0.3s ease',
                      opacity: hoveredHotspotId === hotspot.id ? 1 : 0,
                    }}
                  />
                )}
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {hotspot.title}
                </Typography>
                <Typography variant="caption">
                  {hotspot.description}
                </Typography>
              </Box>
            </HotspotInfo>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageMap;