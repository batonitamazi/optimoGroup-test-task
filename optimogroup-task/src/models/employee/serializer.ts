import { JobSerializer } from "../job/serializer";
import { LocationSerializer } from "../location/serializer";
import { Serializer } from "../serializer";
import { Employee } from "./Employee";



export class EmployeeSerializer implements Serializer {

    fromJson (json: any) {
        const employee = new Employee()
        employee.id = json.id
        employee.name = json.name 
        employee.like = json.liked
        employee.description = json.description
        employee.avatar = json.avatar
        if(json.job_id){
            const jobSerializer = new JobSerializer()
            employee.jobId = jobSerializer.fromJson(json.job_id)
        }
        if(json.location_id){
            const locationSerializer = new LocationSerializer()
            employee.locationId = locationSerializer.fromJson(json.location)
        }
        console.log(employee)
        return employee
    }

    toJson(item: Employee) {
        
    }

}