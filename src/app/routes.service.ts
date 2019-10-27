import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './constants'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  getroutesResult = null
  constructor(public http: HttpClient) {
    
   }

 getRoutes(): Observable<any> {
    return  this.http.get(API_URL + '/acceptedroutes');
   
  }
  
   addStudentroute (args: { routeId: String, studentId: String, studentName: String   }) {
   return  this.http.post( API_URL +'/requestedroutes',args)
    

  }
}
