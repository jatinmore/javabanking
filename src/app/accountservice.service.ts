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
}
