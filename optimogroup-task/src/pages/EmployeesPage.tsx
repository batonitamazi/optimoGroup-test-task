import React, { useEffect, useState } from 'react'
import { Employee } from '../models/employee/Employee'
import { EmployeeService } from '../models/employee/service'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Container, createTheme, CssBaseline, Grid, IconButton, MenuItem, Paper, Stack, TextField, ThemeProvider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Job } from '../models/job/Job';
import { jobService } from '../models/job/service';
import { locationService } from '../models/location/service';
import { Locations } from '../models/location/Location';
import { pink } from '@mui/material/colors';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SortIcon from '@mui/icons-material/Sort';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function EmployeesPage() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [locations, setLocations] = useState<Locations[]>([])
  const [sortAsc, setSortAsc] = useState(false)
  const [job, setJob] = useState("")
  const [location, setLocation] = useState("")
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])


  const getEmployees = () => {
    EmployeeService.list().then((r: any) => {
      setEmployees(r.results)
      setFilteredEmployees(r.results)
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

  function filterJob(event: any) {
    event.preventDefault();
    const jobsValue = jobs.findIndex(job => event.target.value === job.name) + 1;
    setJob(event.target.value)
    setFilteredEmployees(
      filteredEmployees.filter((employee) => {
        return (employee.jobId === jobsValue)
      })
    )
  }

  function filterLocation(event: any) {
    event.preventDefault();
    const locationsValue = locations.findIndex(loc => event.target.value === loc.name) + 1;
    setLocation(event.target.value)
    setFilteredEmployees(
      filteredEmployees.filter((employee) => {
        return (employee.locationId === locationsValue)
      })
    )
  }

  function handleSort(e: any) {
    e.preventDefault();
    if (sortAsc === false) {
      const sortedData = [...filteredEmployees].sort((a, b) => {
        return a.like < b.like ? 1 : -1

      })
      setFilteredEmployees(sortedData)
      setSortAsc(true)

    } else {
      const sortedData = [...filteredEmployees].sort((a, b) => {
        return a.like > b.like ? 1 : -1
      })
      setFilteredEmployees(sortedData)
      setSortAsc(false)
    }
  }

  useEffect(() => {
    getEmployees();
    getJobs();
    getLocations();
  }, [])




  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ pb: 15, pt: 10 }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Our Employees
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Here is a list, where are our employees, you can visit them by clicking button See
                and you can also provide Feedback about them and their work,
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button sx={{bgcolor: '#009688'}}variant="contained" onClick={() => navigate('/feedback')}>Individual Feedback</Button>
                <Button sx={{color: '#009688'}} variant="outlined" onClick={() => navigate('/')}>MainPage</Button>
              </Stack>
            </Container>
          </Box>
          
          <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Container
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <Button onClick={handleSort} sx={{ color: '#212121' }}>
                {sortAsc ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                <SortIcon />
                sort
              </Button>
                <TextField
                  id="outlined-select-job"
                  select
                  sx={{ color: '#fff3e0', mt: 2 }}
                  label="job"
                  value={job}
                  onChange={filterJob}
                  helperText="Filter by job position"
                >
                  {jobs.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-location"
                  select
                  sx={{ color: '#fff3e0', mt: 2 }}
                  label="location"
                  value={location}
                  onChange={filterLocation}
                  helperText="Filter by Location"
                >
                  {locations.map((opt) => (
                    <MenuItem key={opt.id} value={opt.name}>
                      {opt.name}
                    </MenuItem>
                  ))}
                </TextField>
            </Container>
          </Grid>
            <Grid container spacing={4}>
              {filteredEmployees.map((employee, index) => {
                return (
                  <Grid item xs={12} lg={4} md={3}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      key={index}
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        image={employee.avatar}
                        key={employee.avatar}
                        alt="Paella dish"
                        sx={{ borderRadius: 4 }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {employee.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
                          {employee.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Typography>{employee.like}</Typography>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon sx={{ color: pink[500] }} />
                        </IconButton>
                        {jobs.filter((job) => job.id === employee.jobId).map((result, index) => {
                          return (
                            <>
                              <WorkIcon sx={{ color: '#212121' }}/>
                              <Typography key={index}>{result.name}</Typography>
                            </>
                          )
                        })}
                        {locations.filter((loc) => loc.id === employee.locationId).map((result, index) => {
                          return (
                            <>
                              <LocationOnIcon sx={{ color: pink[500] }} />
                              <Typography key={index}>{result.name}</Typography>
                            </>
                          )
                        })}
                        <Button variant="contained" sx={{bgcolor: '#009688' }} size="small" onClick={()=>navigate(`${employee.id}`)}>View</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

const theme = createTheme({
  palette: {
    text: {
      primary: '#212121',
      secondary: '#46505A',
    },
    action: {
      active: '#46505A',
    },

  },
});

export default EmployeesPage