import { Serializer } from "../serializer"
import { Job } from "./Job"

export class JobSerializer implements Serializer {
    fromJson(json: any) {
        const job = new Job()
        job.id = json.id     
        job.name = json.name     
        return job
    }

    toJson(item: Job) {
        const obj: any = {}
        return obj
    }
}