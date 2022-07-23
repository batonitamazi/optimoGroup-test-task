import { ResourceProvider } from "../../providers/resource.provider"
import { FeedBack } from "./feedback"
import { FeedBackSerializer } from "./serializer"




export class FeedBackProvider extends ResourceProvider<FeedBack> {
    constructor() {
        super("/feedback", new FeedBackSerializer())
    }
}


export const FeedBackService = new FeedBackProvider();