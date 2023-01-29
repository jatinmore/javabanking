import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http:HttpClient) { }

  private url:string ="http://localhost:8080/account/"
  getAllAccountDetails():Observable<Account[]>{
    return this.http.get<Account[]>(this.url);

  }

  createAccount(account:any):Observable<Object>{
    console.log("post call")
    return this.http.post(this.url,account)


  } 


  editAccountDetails(account:Account):Observable<any>{
    return this.http.put(this.url+account.accId,account)
  }

  getAccountById(id:number):Observable<Account>{
    return this.http.get<Account>(this.url+id)
  }
  deleteAccount(id:number):Observable<any>{
    return this.http.delete(this.url+id)
  }


}
