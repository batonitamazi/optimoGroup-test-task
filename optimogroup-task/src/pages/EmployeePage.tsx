import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Grid, IconButton, } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { pink } from '@mui/material/colors';
import { Employee } from '../models/employee/Employee';
import { EmployeeService } from '../models/employee/service';
import { useParams } from 'react-router-dom';
import FeedBackForm from '../components/feedbackForm';
import { FeedBack } from '../models/feedback/feedback';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';




function EmployeePage() {
  let { id }: any = useParams();
  const [employee, setEmployee] = useState<Employee | any>()
  const [open, setOpen] = useState(false);

  const loadEmployee = (id: Number) => {
    EmployeeService.read(id).then((response: any) => {
      setEmployee(response)
    })
  }

  useEffect(() => {
    loadEmployee(id)
  }, [])
  return (
    <>
      <Grid item xs={12} lg={2} style={{ padding: 20 }}>
        <FeedBackForm
          open={open}
          name={employee?.name}
          handleDialog={(bool: any) => setOpen(bool)}
        />
      </Grid>
      <Box sx={{ pb: 7, pt: 7 }}>
        <Grid container spacing={4} >
          
              <Grid item xs={4} >
                <Card sx={{ minWidth: 100, minHeight: 200 }}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={employee?.avatar}
                    alt="Paella dish"
                    sx={{ cursor: 'pointer' }}
                  />

                  <CardContent >
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      {employee?.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {employee?.description}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Typography> {employee?.like}</Typography>

                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: pink[500] }} />
                    </IconButton>

                    {/* {jobs.filter((job) => job.id === employee.jobId).map((result) => {
                      return (
                        <>
                          <WorkIcon color="primary" />
                          <Typography key={result.id}>{result.name}</Typography>
                        </>
                      )
                    })}
                    {locations.filter((loc) => loc.id === employee.locationId).map((result) => {
                      return (
                        <>
                          <LocationOnIcon color="action" />
                          <Typography key={result.id}>{result.name}</Typography>
                        </>
                      )
                    })} */}
                    <Button
                      onClick={() => {
                        setOpen(true);
                      }}
                    ><FeedbackIcon /></Button>

                  </CardActions>
                </Card>
              </Grid>
        </Grid>
      </Box>
    </>
      
    
    
      
  )
}

export default EmployeePage