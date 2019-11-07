import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "./constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminAuthService {
  constructor(private http: HttpClient) {}
  login(email: String, password: String): Observable<any> {
    return this.http.post(API_URL + "/admin/login", {
      email,
      password
    });
  }
}
