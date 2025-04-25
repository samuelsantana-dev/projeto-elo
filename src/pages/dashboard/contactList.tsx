import React, { useState, useEffect } from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  CircularProgress,
  Paper,
  Alert,
  Button,
  ListItemButton
} from '@mui/material';
import { Link } from 'react-router-dom';

interface ContactSummary {
  id: string;
  name: string;
  email: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<ContactSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://195.200.6.192:5050/api/v1/contact/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar lista de contatos');
        }

        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Contatos
      </Typography>
      
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} disablePadding>
            <ListItemButton component={Link} to={`/contacts/${contact.id}`}>
              <ListItemText 
                primary={contact.name} 
                secondary={contact.email} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ContactList;