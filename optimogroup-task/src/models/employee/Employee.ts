import { Job } from "../job/Job";
import { Locations } from "../location/Location";
import { Resource } from "../resource";


export class Employee extends Resource {
    name: string | any 
    like: BigInteger | any 
    description: string | any 
    avatar: File[] | any 
    jobId: Job | any
    locationId: Locations | any 
}