import React, { useState, FormEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';
//import AddIcon from '@mui/icons-material/Add';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError(true);
      return;
    }
    onAdd(title);
    setTitle('');
    setError(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        label="Nueva Tarea"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={error}
        helperText={error ? 'El título de la tarea no puede estar vacío' : ''}
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        //startIcon={<AddIcon />}
        sx={{
          transition: 'transform 0.2s, background-color 0.2s',
          '&:hover': {
            backgroundColor: 'darkgreen',
            transform: 'scale(1.05)',
          },
        }}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddTaskForm;