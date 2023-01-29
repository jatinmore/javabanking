import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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

 

  // addUser(user:User):Observable<User>{
  //   return this.http.post<User>(this.url,user)
  // }
  // post(url, body, options): Observable<any> 
  createUser(user:any):Observable<Object>{
    console.log("post call")
    return this.http.post(this.url,user)
    
  }

  editUser(user:User):Observable<any>{
    return this.http.put(this.url+user.userid,user)
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.url+id)
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.url+id)
  }

//   private handleError(error: any) {
//     console.error("Error : "+error);
//     return throwError(error)
// }
}
