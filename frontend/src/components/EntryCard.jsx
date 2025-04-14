import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

export default function EntryCard({ entry }) {
  return (
    <Card className="entry-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {entry.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {entry.content.substring(0, 100)}...
        </Typography>
        <div className="card-footer">
          <Chip
            label={new Date(entry.created_at).toLocaleDateString()}
            size="small"
          />
          {entry.favorite && <Chip label="Favorito" color="secondary" size="small" />}
        </div>
      </CardContent>
    </Card>
  );
}