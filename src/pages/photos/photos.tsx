/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  useMediaQuery, 
  useTheme 
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";

import img1 from "../../assets/rectangle-33.png";
import img2 from "../../assets/Rectangle 42.png";
import img3 from "../../assets/Rectangle 37.png";
import img4 from "../../assets/Rectangle 42.png";
import img5 from "../../assets/Rectangle 45.png";

const images = [img1, img2, img3, img4, img5];

const ThumbnailButton = styled(Button)(({ theme, selected }: { theme?: any; selected: boolean }) => ({
  minWidth: '110px',
  height: '64px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 150ms',
  padding: '2px',
  flexShrink: 0,
  border: selected 
    ? `2px solid ${theme.palette.success.main}` 
    : `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: selected 
    ? theme.palette.success.light 
    : theme.palette.background.paper,
  boxShadow: selected 
    ? `0 0 0 3px ${theme.palette.success.light}`
    : 'none',
  '&:hover': {
    border: selected 
      ? `2px solid ${theme.palette.success.main}`
      : `2px solid ${theme.palette.grey[400]}`,
    backgroundColor: selected 
      ? theme.palette.success.light 
      : theme.palette.grey[50]
  }
}));

export default function PhotoGallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log('isMobile', isMobile);
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'background.default',
      py: { xs: 4, md: 6 },
      px: { xs: 2, md: 3 }
    }}>
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto'
      }}>
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
            fontWeight: 400,
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            letterSpacing: '0.025em',
            '& span': {
              color: 'success.main',
              fontWeight: 'bold'
            }
          }}
        >
          CONFIRA <span>ALGUMAS OBRAS!</span>
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' }
        }}>
          {/* Main Card */}
          <Card sx={{
            width: '100%',
            maxWidth: { md: '480px' },
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 2
          }}>
            <Box 
              sx={{
                height: { xs: '240px', sm: '300px', md: '325px' },
                backgroundImage: `url(${images[selected]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: 'success.main',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  mb: 0.5
                }}
              >
                Proteção Externa
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Ribeirão Preto/SP
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.disabled',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Identificação
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            width: isMobile ? '100%' : '150px' ,
            maxWidth: { md: 'auto' },
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 2,
            p: { xs: 1.5, md: 2 }
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              overflowX: { xs: 'auto', md: 'visible' }
            }}>
              {images.map((img, idx) => (
                <ThumbnailButton 
                  key={idx}
                  onClick={() => setSelected(idx)}
                  selected={selected === idx}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 1,
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  {selected === idx && (
                    <Box sx={{
                      position: 'absolute',
                      top: 6,
                      right: 6,
                      backgroundColor: 'background.paper',
                      borderRadius: '50%',
                      p: 0.5
                    }}>
                      <CheckIcon sx={{ 
                        fontSize: '1rem',
                        color: 'success.main'
                      }} />
                    </Box>
                  )}
                </ThumbnailButton>
              ))}
            </Box>
          </Card>
        </Box>

        <Box sx={{
          mt: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          gap: 2
        }}>
          <Button 
            variant="outlined"
            sx={{
              backgroundColor: 'background.paper',
              borderColor: 'success.main',
              color: 'text.secondary',
              borderRadius: 1,
              px: 3,
              py: 1,
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: 1,
              '&:hover': {
                backgroundColor: 'success.light',
                borderColor: 'success.dark'
              }
            }}
          >
            Entre para o mercado de alto padrão!
          </Button>
          
          <Button 
            variant="contained"
            color="success"
            sx={{
              color: 'background.paper',
              borderRadius: 1,
              px: 3,
              py: 1,
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 3.5px 10px rgba(19, 206, 102, 0.13)',
              '&:hover': {
                backgroundColor: 'success.dark'
              }
            }}
          >
            Seja um Franqueado!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}