import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import myteam from '../myteam.jpg';

function MainPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container spacing={6} sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1300px',
        padding: '50px',
      }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} >
            Let's scale your business
          </Typography>
          <Typography variant="h6" sx={{
            opacity: '0.4',
            paddingBottom: '30px',
          }}>
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', bgcolor: '#009688' }}
            onClick={() => navigate('/employee')}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img alt="My Team" src='/myteam.jpg' style={{
            width: '100%',
          }}/>
        </Grid>
      </Grid>
    </Box>





  )
}




export default MainPage