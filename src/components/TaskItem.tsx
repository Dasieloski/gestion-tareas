import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        bgcolor: task.completed ? 'action.selected' : 'background.paper',
        borderRadius: 1,
        mb: 1,
      }}
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={task.title}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TaskItem;