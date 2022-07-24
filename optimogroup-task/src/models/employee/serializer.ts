import { JobSerializer } from "../job/serializer";
import { jobService } from "../job/service";
import { LocationSerializer } from "../location/serializer";
import { Serializer } from "../serializer";
import { Employee } from "./Employee";



export class EmployeeSerializer implements Serializer {

    fromJson (json: any) {
        const employee = new Employee()
        employee.id = json.id
        employee.name = json.name
        employee.avatar = `https://test-task-api-optimo.herokuapp.com${json.avatar}`
        employee.like = json.liked
        employee.description = json.description
        employee.jobId = json.job_id
        employee.locationId = json.location_id
        return employee
    }

    toJson(item: Employee) {
        
}

}

