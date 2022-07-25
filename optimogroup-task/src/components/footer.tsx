import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, createTheme, Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const theme = createTheme({
    palette: {
        background: {
            paper: '#009688',
        },
        text: {
            primary: '#e1f5fe',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
    },
});

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {

    return (

        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.paper', p: 6, bottom: 0 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Company Name
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    From Error to Error one finds the entire truth
                </Typography>
                <Copyright />
            </Box>
        </ThemeProvider>
    );
}

