import React, { useState, useEffect } from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  CircularProgress,
  Paper,
  Divider,
  Alert,
  Button
} from '@mui/material';
import { useParams } from 'react-router-dom';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        // Substitua pela URL real da sua API
        const response = await fetch(`http://195.200.6.192:5050/api/v1/contact/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar contato');
        }

        const data = await response.json();
        setContact(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) {
    return (
      <Paper elevation={3} sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper elevation={3} sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
        <Button 
          variant="contained" 
          sx={{ mt: 2 }}
          onClick={() => window.location.reload()}
        >
          Tentar novamente
        </Button>
      </Paper>
    );
  }

  if (!contact) {
    return (
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6">Contato não encontrado</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Contato
      </Typography>
      
      <List>
        <ListItem>
          <ListItemText 
            primary="Nome" 
            secondary={contact.name} 
            secondaryTypographyProps={{ variant: 'body1' }}
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText 
            primary="Email" 
            secondary={contact.email} 
            secondaryTypographyProps={{ variant: 'body1' }}
          />
        </ListItem>
        <Divider />
        
        {contact.phone && (
          <>
            <ListItem>
              <ListItemText 
                primary="Telefone" 
                secondary={contact.phone} 
                secondaryTypographyProps={{ variant: 'body1' }}
              />
            </ListItem>
            <Divider />
          </>
        )}
        
        {contact.address && (
          <>
            <ListItem>
              <ListItemText 
                primary="Endereço" 
                secondary={contact.address} 
                secondaryTypographyProps={{ variant: 'body1' }}
              />
            </ListItem>
            <Divider />
          </>
        )}
        
        <ListItem>
          <ListItemText 
            primary="Criado em" 
            secondary={new Date(contact.createdAt).toLocaleString()} 
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText 
            primary="Atualizado em" 
            secondary={new Date(contact.updatedAt).toLocaleString()} 
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ContactDetails;