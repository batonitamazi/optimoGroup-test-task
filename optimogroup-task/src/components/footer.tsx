import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme } from '@mui/material';
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
        <ThemeProvider theme={theme} >
            <Box sx={{
                width: '100%', bottom: 0, position: 'fixed',
                bg: 'background.paper',
                color: 'text.primary'
            }}>
                <BottomNavigation
                    showLabels
                >
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}

