import React, { useEffect, useState } from 'react'
import { Employee } from '../models/employee/Employee'
import { EmployeeService } from '../models/employee/service'

function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([])

  const getEmployees = () => {
    EmployeeService.list().then((r: any) => {
      setEmployees(r.results)
      
    })
  }
  useEffect(() => {
    getEmployees();
    
  },[])
  return (
    <div>EmployeesPage</div>
  )
}

export default EmployeesPage