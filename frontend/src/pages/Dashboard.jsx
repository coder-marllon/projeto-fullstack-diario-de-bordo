import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import EntryCard from '../components/EntryCard';
import FloatingButton from '../components/FloatingButton';
import api from '../services/api';

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [filter] = useState('all'); // Ou mantenha setFilter se for usar

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await api.get('/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Erro ao buscar anotações:', error);
      }
    };
    
    fetchEntries();
  }, []);

  // Implemente se for usar filtro
  const filteredEntries = entries.filter(entry => {
    if (filter === 'favorites') return entry.favorite;
    if (filter === 'trash') return entry.deleted;
    return true;
  });

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <Grid container spacing={3} className="entries-grid">
        {filteredEntries.map((entry) => (
          <Grid item xs={12} sm={6} md={4} key={entry.id}>
            <EntryCard entry={entry} />
          </Grid>
        ))}
      </Grid>

      <FloatingButton onClick={() => {/* Lógica do modal */}} />
    </div>
  );
}