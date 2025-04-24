import { Box, Typography, Paper } from '@mui/material';
import pecasAgrupadas from '../../assets/pecas-agrupadas.png';

interface HotspotItem {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
}

const hotspots: HotspotItem[] = [
  { id: 1, x: 15, y: 15, title: "Point 1", description: "Description for point 1" },
  { id: 2, x: 45, y: 15, title: "Point 2", description: "Description for point 2" },
  { id: 3, x: 75, y: 15, title: "Point 3", description: "Description for point 3" },
  { id: 4, x: 15, y: 45, title: "Point 4", description: "Description for point 4" },
  { id: 5, x: 45, y: 45, title: "Point 5", description: "Description for point 5" },
  { id: 6, x: 75, y: 45, title: "Point 6", description: "Description for point 6" },
];

const ImageMap = () => {
  return (
    <Box sx={{ position: 'relative', maxWidth: '2xl', mx: 'auto' }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={pecasAgrupadas}
          alt="Interactive Map"
          sx={{ width: '100%', height: 'auto' }}
        />
        
        {hotspots.map((hotspot) => (
          <Box
            key={hotspot.id}
            className="group"
            sx={{
              position: 'absolute',
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  bgcolor: 'rgba(255, 255, 255, 0.4)'
                },
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'white',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </Box>
            
            <Paper
              elevation={3}
              className="opacity-0 group-hover:opacity-100 pointer-events-none"
              sx={{
                position: 'absolute',
                left: '50%',
                bottom: '100%',
                mb: 1,
                transform: 'translateX(-50%)',
                width: 192,
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                color: 'white',
                transition: 'all 0.3s'
              }}
            >
              <Box sx={{ p: 1.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {hotspot.title}
                </Typography>
                <Typography variant="caption">
                  {hotspot.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  position: 'absolute',
                  left: '50%',
                  bottom: -6,
                  transform: 'translateX(-50%) rotate(45deg)'
                }}
              />
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageMap;