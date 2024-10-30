import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const Root = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    // Guardar preferencia de tema en localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
        },
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    }), [mode]);

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App mode={mode} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default Root;