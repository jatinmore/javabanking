import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:8080/user/"
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

}
