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
  addNewRoute(obj) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.post(API_URL + "/existing_routes", obj, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
  updateRoute(obj) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.patch(API_URL + "/existing_routes/" + obj.routeId, obj, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
  deleteRoute(routeId) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.delete(API_URL + "/existing_routes/" + routeId, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
  getOneRoute(routeId): Observable<any> {
    const token = localStorage.getItem("AUTH_TOKEN");
    return this.http.get(API_URL + "/requested_routes/route/" + routeId, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  }
}
