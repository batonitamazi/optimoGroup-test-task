import { ResourceProvider } from "../../providers/resource.provider"
import { Locations } from "./Location"
import { LocationSerializer } from "./serializer"


export class LocationProvider extends ResourceProvider<Locations> {
    constructor(){
        super("location", new LocationSerializer())
    }
}

export const locationService = new LocationProvider()
