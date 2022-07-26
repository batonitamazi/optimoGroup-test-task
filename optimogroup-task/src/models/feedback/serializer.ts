import { Serializer } from "../serializer"
import { FeedBack } from "./feedback"


export class FeedBackSerializer implements Serializer {
    fromJson(json:any){

        const obj: any = {}
        return obj
    }
    toJson(item: FeedBack){
        const obj: any = {
            name: item.name,
            email: item.email,
            message: item.message,
        }
        return obj
    }
}




