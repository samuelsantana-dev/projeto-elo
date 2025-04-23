import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import React, { useState } from 'react';

interface InfoBannerProps {
  title: string;
  shortDescription: string;
  longDescription?: string;
  buttonText: string;
  backgroundColor?: string;
  sx?: SxProps<Theme>;
}

const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  shortDescription,
  longDescription,
  buttonText,
  backgroundColor,
  sx,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isExpanded, setIsExpanded] = useState(false);

  const mainBackgroundColor = backgroundColor || 'linear-gradient(135deg, #1a1a1a, #333)';

  const handleBannerClick = () => {
    if (longDescription) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '380px',
        minHeight: isMobile ? '350px' : '500px',
        backgroundImage: mainBackgroundColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        padding: isMobile ? '15px' : '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, min-height 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 12px 24px ${theme.palette.success.light}`,
          cursor: longDescription ? 'pointer' : 'default',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
          zIndex: 0,
        },
        ...sx,
      }}
      onClick={handleBannerClick}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          fontWeight: 800,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          color: theme.palette.success.main,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant={isMobile ? "body1" : "h6"}
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          fontWeight: 500,
          marginBottom: isExpanded ? '16px' : 'auto', 
        }}
      >
        {isExpanded ? longDescription : shortDescription}
      </Typography>

      {!isExpanded && (
        <Button
          variant="contained"
          sx={{
            alignSelf: 'center',
            position: 'relative',
            zIndex: 1,
            fontWeight: 'bold',
            backgroundColor: theme.palette.success.main,
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.success.dark,
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
            width: isMobile ? '100%' : 'auto',
            padding: isMobile ? '8px 16px' : '10px 24px',
            borderRadius: '8px',
            boxShadow: `0 4px 8px ${theme.palette.success.light}`,
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default InfoBanner;