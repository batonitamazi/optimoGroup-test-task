import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardMedia, Grid, IconButton, } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { pink } from '@mui/material/colors';
import { Employee } from '../models/employee/Employee';
import { EmployeeService } from '../models/employee/service';
import { useParams } from 'react-router-dom';
import FeedBackForm from '../components/feedbackForm';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { jobService } from '../models/job/service';
import { locationService } from '../models/location/service';
import { Job } from '../models/job/Job';
import { Locations } from '../models/location/Location';




function EmployeePage() {
  let { id }: any = useParams();
  const [employee, setEmployee] = useState<Employee | any>()
  const [jobs, setJobs] = useState<Job[]>([])
  const [locations, setLocations] = useState<Locations[]>([])
  const [open, setOpen] = useState(false);

  const loadEmployee = (id: Number) => {
    EmployeeService.read(id).then((response: any) => {
      setEmployee(response)
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
    loadEmployee(id)
    getJobs();
    getLocations();
  }, [id])
  return (
    <>
      <Grid item xs={12} lg={2} style={{ padding: 20 }}>
        <FeedBackForm
          open={open}
          name={employee?.name}
          handleDialog={(bool: any) => setOpen(bool)}
        />
      </Grid>
      <Grid container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 10, pb: 7 }} >
        <Grid item  xs={4} lg={12} md={6}>
          <Card sx={{ minWidth: 200, minHeight: 200, bgcolor: '#009688' }}
          >
            <CardMedia
              component="img"
              height="500"
              width="300"
              image={employee?.avatar}
              alt="Paella dish"
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
              <Grid container
                direction="row"
                alignItems="center"
                justifyContent="space-evenly">
                <Typography> {employee?.like}
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: pink[500] }} />
                  </IconButton>
                </Typography>

                {jobs.filter((job) => job.id === employee?.jobId).map((result) => {
                  return (
                    <>
                      <Typography key={result.id}>{result.name}</Typography>
                      <WorkIcon color="primary" sx={{ color: '#212121' }} />
                    </>
                  )
                })}
                {locations.filter((loc) => loc.id === employee?.locationId).map((result) => {
                  return (
                    <>
                      <LocationOnIcon color="action"sx={{ color: pink[500] }} />
                      <Typography key={result.id}>{result.name}</Typography>
                    </>
                  )
                })}
                <Button
                  onClick={() => {
                    setOpen(true);
                  }}
                  variant="contained"
                  sx={{bgcolor: '#009688'}}
                >Feedback<FeedbackIcon /></Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid >
    </>




  )
}

export default EmployeePage