import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const img = 'src/assets/rectangle-42.png';
const rectangle33 = 'src/assets/rectangle-33.png';
const photos = [
  `${img}`,
  `${img}`,
  `${img}`,
  `${img}`,
  `${img}`,
  `${img}`,
  `${img}`,
];

const Photos = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#DADADA",
      minHeight: "100vh",
      py: 8,
      px: 2
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <Typography variant="h4" color="#003D12" gutterBottom sx={{ fontWeight: 'bold' }}>
          CONFIRA <Box component="span" sx={{ color: '#00A331' }}>ALGUMAS OBRAS!</Box>
        </Typography>
    
        <Box sx={{ width: '100%', mb: 3 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="400"
              image={rectangle33}
              alt="Main"
              sx={{ width: '100%', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" color="#003D12" fontWeight="bold">
                Proteção Externa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ribeirão Preto/SP
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Identificação
              </Typography>
            </CardContent>
          </Card>
        </Box>
    
        <Box sx={{ 
          width: '100%',
          overflowX: 'auto',
          py: 2,
          mb: 3,
          '&::-webkit-scrollbar': { height: '6px' },
          '&::-webkit-scrollbar-thumb': { 
            backgroundColor: '#00A331', 
            borderRadius: '3px' 
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            width: 'max-content',
            px: 1
          }}>
            {photos.map((photo, index) => (
              <Card key={index} sx={{ 
                minWidth: 120,
                boxShadow: 2,
                borderRadius: 1,
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="80"
                  image={photo}
                  alt={`Obra ${index + 1}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            ))}
          </Box>
        </Box>
    
        {/* Botões */}
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          mt: 'auto'
        }}>
          <Button 
            variant="outlined" 
            fullWidth 
            sx={{ 
              borderColor: '#00A331',
              color: '#00A331',
              py: 1.5,
              '&:hover': { 
                backgroundColor: 'rgba(0, 163, 49, 0.04)',
                borderColor: '#00A331'
              }
            }}
          >
            Entre para o mercado de alto padrão!
          </Button>
          <Button 
            variant="contained" 
            fullWidth
            sx={{ 
              backgroundColor: '#00A331',
              py: 1.5,
              '&:hover': { backgroundColor: '#008c29' }
            }}
          >
            Seja um Franqueado!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Photos;
