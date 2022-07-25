import axios from "axios";
import { environment } from "../environment/environment";
import { Resource } from "../models/resource";
import { Serializer } from "../models/serializer";

export class ResourceProvider<T extends Resource> {
  constructor(public endpoint: string, public serializer: Serializer) { }


  public list = async () => new Promise((resolve, reject) => {
    axios.get(`${environment.basePath}/${this.endpoint}`)
      .then((resp) =>
        resolve(this.convertList(resp.data))).catch((error) => reject(error))
  })


  public create = async (item: T) => new Promise((resolve, reject) => {
      axios.post(`${environment.basePath}/${this.endpoint}`, this.serializer.toJson(item))
        .then(function(response) {
          console.log(response);
        })
        .catch(function (error) {
          reject(error)

        });
  })

  public read = async (id: Number) => new Promise((resolve, reject) => {
    axios.get(`${environment.basePath}/${this.endpoint}/${id}`)
      .then((resp) =>
        resolve(this.convert(resp.data))).catch((error) => reject(error))
  })



  private convertList(data: any): any {
    return {
      results: data.map((item: any) => this.serializer.fromJson(item)),
    };
  }
  private convert(data: any): any {
    return this.serializer.fromJson(data);
  }

}


