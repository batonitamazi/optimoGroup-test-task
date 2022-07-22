import React, { useEffect, useState } from 'react'
import { Employee } from '../models/employee/Employee'
import { Job } from '../models/job/Job'
import { jobService } from '../models/job/service'
import { Locations } from '../models/location/Location'
import { locationService } from '../models/location/service'

function MainPage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [location, setLocation] = useState<Locations[]>([])

 
  const getJobs = () => {
    jobService.list().then((r: any) => {
      setEmployees(r.results)
      
    })
  }
  const getLocations = () => {
    locationService.list().then((r: any) => {
      setEmployees(r.results)
      
    })
  }


  useEffect(() => {
    getJobs();
    getLocations();
  },[])
  
  // console.log(employees)
  return (
    <div>MainPage</div>
  )
}

export default MainPage