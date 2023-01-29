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

  createTrxn(transaction:any):Observable<Object>{
    console.log("post call")
    return this.http.post(this.url,transaction)
  }



  editTrxnDetails(transaction:Transactions):Observable<any>{
    return this.http.put(this.url+transaction.transId,transaction)
  }

  getTrxnById(id:number):Observable<Transactions>{
    return this.http.get<Transactions>(this.url+id)
  }
  deleteTrxn(id:number):Observable<any>{
    return this.http.delete(this.url+id)
  }
}
