import React, { useEffect, useState } from 'react'
import { Employee } from '../models/employee/Employee'
import { EmployeeService } from '../models/employee/service'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Grid, IconButton, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Job } from '../models/job/Job';
import { jobService } from '../models/job/service';
import { locationService } from '../models/location/service';
import { Locations } from '../models/location/Location';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedBackForm from '../components/feedbackForm';
import { FeedBack } from '../models/feedback/feedback';
import { pink } from '@mui/material/colors';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

function EmployeesPage() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [locations, setLocations] = useState<Locations[]>([])
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<FeedBack | any>();

  const getEmployees = () => {
    EmployeeService.list().then((r: any) => {
      setEmployees(r.results)

    })
  }
  const getJobs = () => {
    jobService.list().then((r: any) => {
      setJobs(r.results)
    })
  }
  const getLocations = () => {
    locationService.list().then((r: any) => {
      setLocations(r.results)
    })
  }

  useEffect(() => {
    getEmployees();
    getJobs();
    getLocations();

  }, [])
  return (
    <>
      <Grid item xs={12} lg={2} style={{ padding: 20 }}>
        <FeedBackForm
          open={open}
          item={feedback}
          handleDialog={(bool: any) => setOpen(bool)}
        />
      </Grid>
      <Box sx={{ pb: 7, pt: 7 }}>
        <Grid container spacing={4} >
          {employees.map((employee,) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ minWidth: 100, minHeight: 200 }} key={employee.id}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={employee.avatar}
                    alt="Paella dish"
                    // sx={{cursor: 'pointer'}}
                    // onClick={() => { navigate(`/employee/${employee.id}`) }}

                  />

                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      {employee.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {employee.description}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Typography> {employee.like}</Typography>

                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon sx={{ color: pink[500] }} />
                    </IconButton>

                    {jobs.filter((job) => job.id === employee.jobId).map((result) => {
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
                    })}
                    <Button
                      onClick={() => {
                        setFeedback(null);
                        setOpen(true);
                      }}

                    ><FeedbackIcon /></Button>

                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default EmployeesPage