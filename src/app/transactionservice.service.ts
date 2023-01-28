import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {
  private url:string="http://localhost:8080/transactions"
  constructor(private http:HttpClient) { }
  getAllTransactions():Observable<Transactions[]>{
    return this.http.get<Transactions[]>(this.url)
  }
}
