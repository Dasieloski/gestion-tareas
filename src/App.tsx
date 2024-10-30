import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, IconButton, Box } from '@mui/material';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Pagination from '@mui/material/Pagination';
import './App.css';

interface AppProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ mode, toggleTheme }) => {
  // Inicializar el estado 'tasks' desde localStorage si existen
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [loading, setLoading] = useState<boolean>(tasks.length === 0);

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tasksPerPage = 10; // Número de tareas por página

  useEffect(() => {
    if (tasks.length === 0) {
      const fetchTasks = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data: Task[] = await response.json();
          setTasks(data);
        } catch (error) {
          console.error('Error al obtener las tareas:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchTasks();
    } else {
      setLoading(false);
    }
  }, [tasks]);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
   // console.log('Tareas guardadas en localStorage:', tasks);
  }, [tasks]);

  // Agregar una nueva tarea
  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    // Resetear a la primera página cuando se agrega una nueva tarea
    setCurrentPage(1);
  };

  // Alternar el estado de completado de una tarea
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Eliminar una tarea
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Calcular las tareas a mostrar en la página actual
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gestión de Tareas
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <Paper sx={{ p: 2 }}>
        <AddTaskForm onAdd={addTask} />
        {loading ? (
          <Typography>Cargando...</Typography>
        ) : (
          <>
            <TaskList tasks={currentTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
            {totalPages > 1 && (
              <Box display="flex" justifyContent="center" mt={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handleChangePage}
                  color="primary"
                  shape="rounded"
                />
              </Box>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
};

export default App;