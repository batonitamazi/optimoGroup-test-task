import axios from "axios";
import { environment } from "../environment/environment";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Resource } from "../models/resource";
import { ajax } from "rxjs/ajax";
import { Serializer } from "../models/serializer";

export class ResourceProvider<T extends Resource> {
  constructor(public endpoint: string, public serializer: Serializer) { }



  public list = async () => new Promise((resolve, reject) => {
    axios.get(`${environment.basePath}/${this.endpoint}`)
      .then((resp) =>
        resolve(this.convertList(resp.data))).catch((error) => reject(error))
  })


  // public create = async (item: T) => new Promise((resolve, reject) => {
  //     axios.post('/user', this.serializer.toJson(item))
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         reject(error)

  //       });
  // })
  public async create(item: T): Promise<T> {
    const headers: any = {
      "Content-Type": "application/json",
    };
    const url = `${environment.basePath}/${this.endpoint}`;
    const body = this.serializer.toJson(item);
    return ajax({
      url,
      method: "POST",
      headers: headers,
      body,
    })
      .pipe(
        map((data: { response: any; }) => {
          return this.convert(data.response);
        }),
        catchError((error) => {
          return of(error);
        })
      )
      .toPromise();
  }


  private convertList(data: any, endpoint = ""): any {
    return {
      results: data.map((item: any) => this.serializer.fromJson(item)),
    };
  }
  private convert(data: any): any {
    return this.serializer.fromJson(data.data);
  }

}


