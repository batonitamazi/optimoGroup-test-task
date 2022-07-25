import { ThemeProvider } from '@emotion/react';
import { Box, Button, createTheme, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper/Paper'
import React from 'react'
import { useNavigate } from 'react-router-dom';



function MainPage() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 30, pb: 7 }}>
        <Box>
          <Grid container spacing={4}>
            <Box>
              <Box>
                <Typography sx={{fontSize: 100}}>Landing Page</Typography>
              </Box>
              <Box>
                <Button sx={{width: 200, fontSize: 100}} onClick={() => navigate('/employee')}>Click me</Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>


  )
}


const theme = createTheme({
  palette: {

    text: {
      primary: '#212121',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});

export default MainPage