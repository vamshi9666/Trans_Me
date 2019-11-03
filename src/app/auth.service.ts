import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "./constants";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = null;
  constructor(private http: HttpClient) {}
  login(email: String, password: String): Observable<any> {
    return this.http.post(API_URL + "/user/login", { email, password });
  }
  singUp(email: String, password: String): Observable<any> {
    return this.http.post(API_URL + "/user/signup", { email, password });
  }
  setUser(user) {
    this.user = user;
    console.log(" set to be ", user, this.user);
  }
  getUser() {
    return this.user;
  }
}
