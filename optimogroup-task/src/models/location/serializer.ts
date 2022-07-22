import { Serializer } from "../serializer"
import { Locations } from "./Location"

export class LocationSerializer implements Serializer {
    fromJson(json: any) {
        const location = new Locations()
        location.id = json.id      
        location.name = json.name        
        return location
    }

    toJson(item: Locations) {
        const obj: any = {}
        return obj
    }
}