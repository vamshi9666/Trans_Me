import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './constants'
@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(public http: HttpClient) { }

  public getRoutes() {
    const data = this.http.get(API_URL + '/acceptedroutes');
    return data
  }
}
