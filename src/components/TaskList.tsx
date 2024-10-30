import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { Task } from '../types';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <List>
      <TransitionGroup>
        {tasks.map((task) => (
          <Collapse key={task.id} timeout={250}>
            <TaskItem
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
};

export default TaskList;