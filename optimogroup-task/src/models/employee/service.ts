import { ResourceProvider } from "../../providers/resource.provider";
import { Employee } from "./Employee";
import { EmployeeSerializer } from "./serializer";


export class EmployeeProvider extends ResourceProvider<Employee> {
    constructor(){
        super("employee", new EmployeeSerializer())
    }
}

export const EmployeeService = new EmployeeProvider()
