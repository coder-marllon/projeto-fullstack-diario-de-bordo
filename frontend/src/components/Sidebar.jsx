import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Folder, Delete, Favorite } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <List>
        {['Todos', 'Favoritos', 'Lixeira'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <Folder />}
              {index === 1 && <Favorite />}
              {index === 2 && <Delete />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}