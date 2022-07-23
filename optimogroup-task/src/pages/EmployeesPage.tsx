import React, { useEffect, useState } from 'react'
import { Employee } from '../models/employee/Employee'
import { EmployeeService } from '../models/employee/service'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Job } from '../models/job/Job';
import { jobService } from '../models/job/service';
import { locationService } from '../models/location/service';
import { Locations } from '../models/location/Location';

function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [locations, setLocations] = useState<Locations[]>([])

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
    
      <Grid container spacing={0} sx={{ pb: 7,  pt: 7 }}>
        <Grid item xs={12} lg={3} style={{ padding: 20 }} >
          {employees.map((employee,) => {
            // console.log(employee.avatar)
            return (
              <Card sx={{ minWidth: 275 }} key={employee.id}>
                <CardMedia
                  component="img"
                  height="194"
                  image={employee.avatar}
                  alt="Paella dish"
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
                    <FavoriteIcon />
                  </IconButton>

                  {jobs.filter((job) => job.id === employee.jobId).map((result) => {
                    return (
                      <Typography key={result.id}>job:  {result.name}</Typography>
                    )
                  })}
                  {locations.filter((loc) => loc.id === employee.locationId).map((result) => {
                    return (
                      <Typography key={result.id}>job:  {result.name}</Typography>
                    )
                  })}
                </CardActions>
              </Card>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default EmployeesPage