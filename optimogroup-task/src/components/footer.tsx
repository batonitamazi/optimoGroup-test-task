import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, Paper } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        background: {
            paper: '#D3D3D3',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
    },
});



export default function Footer() {

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                    >
                    </BottomNavigation>
            </Paper>
        </ThemeProvider>
    );
}

