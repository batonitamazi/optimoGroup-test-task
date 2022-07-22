import { JobSerializer } from "../job/serializer";
import { LocationSerializer } from "../location/serializer";
import { Serializer } from "../serializer";
import { Employee } from "./Employee";



export class EmployeeSerializer implements Serializer {

    fromJson (json: any) {
        const employee = new Employee()
        employee.name = json.name 
        employee.like = json.like 
        employee.description = json.employee 
        employee.avatar = json.avatar
        if(json.jobId){
            const jobSerializer = new JobSerializer()
            employee.jobId = jobSerializer.fromJson(json.jobId)
        }
        if(json.locationId){
            const locatinSerializer = new LocationSerializer()
            employee.locationId = locatinSerializer.fromJson(json.locationId)
        }
        return employee
    }

    toJson(item: Employee) {
        
    }

}