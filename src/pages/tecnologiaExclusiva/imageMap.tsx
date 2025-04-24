import { Box, Typography, Paper, styled } from '@mui/material';
import pecasAgrupadas from '../../assets/pecas-agrupadas.png';
import { useState } from 'react';

interface HotspotItem {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
}

const hotspots: HotspotItem[] = [
  { id: 1, x: 15, y: 15, title: "Ponto 1", description: "Descrição para o ponto 1" },
  { id: 2, x: 45, y: 15, title: "Ponto 2", description: "Descrição para o ponto 2" },
  { id: 3, x: 75, y: 15, title: "Ponto 3", description: "Descrição para o ponto 3" },
  { id: 4, x: 15, y: 45, title: "Ponto 4", description: "Descrição para o ponto 4" },
  { id: 5, x: 45, y: 45, title: "Ponto 5", description: "Descrição para o ponto 5" },
  { id: 6, x: 75, y: 45, title: "Ponto 6", description: "Descrição para o ponto 6" },
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
}

const HotspotInfo = styled(Paper, { shouldForwardProp: (prop) => prop !== 'visible' })<HotspotInfoProps>(({ theme, visible }) => ({
  position: 'absolute',
  left: '50%',
  opacity: visible ? 1 : 0,
  bottom: 'calc(100% + 8px)', // Espaçamento entre o botão e o tooltip
  marginBottom: theme.spacing(1),
  transform: 'translateX(-50%)',
  width: 192,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(8px)',
  color: 'white',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  pointerEvents: 'none',
  zIndex: 1, // Garante que o tooltip apareça acima de outros elementos
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
          src={pecasAgrupadas}
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
            <HotspotInfo elevation={3} visible={hoveredHotspotId === hotspot.id}>
              <Box sx={{ p: 1.5 }}>
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