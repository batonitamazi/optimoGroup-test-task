import { ResourceProvider } from "../../providers/resource.provider"
import { Job } from "./Job"
import { JobSerializer } from "./serializer"

export class JobProvider extends ResourceProvider<Job> {
    constructor(){
        super("job", new JobSerializer())
    }
}

export const jobService = new JobProvider()
