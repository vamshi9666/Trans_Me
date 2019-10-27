import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "./constants";
import { Observable } from "rxjs/internal/Observable";
@Injectable({
  providedIn: "root"
})
export class RoutesService {
  getroutesResult = null;
  constructor(public http: HttpClient) {}

  getRoutes(): Observable<any> {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.get(API_URL + "/existing_routes", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }

  addStudentroute(args) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.post(API_URL + "/requested_routes", args, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
}
