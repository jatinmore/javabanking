import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ShowaccountdetailsComponent } from './showaccountdetails/showaccountdetails.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowtransactionsComponent } from './showtransactions/showtransactions.component';
import { CreatetransactionComponent } from './createtransaction/createtransaction.component';
const ROUTES:Routes = [
  { path:'login',component:LoginComponent},
  {path:'services',component:ServicesComponent},
  {path:'user',component:UserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'showuser',component:ShowuserComponent},
  {path:'account',component:AccountComponent},
  {path:'addaccount',component:CreateaccountComponent},
  {path:'showAccounts',component:ShowaccountdetailsComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'addtxns',component:CreatetransactionComponent},
  {path:'showtxns',component:ShowtransactionsComponent},
  {path:'about',component:AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ServicesComponent,
    AboutComponent,
    AdduserComponent,
    ShowuserComponent,
    CreateaccountComponent,
    ShowaccountdetailsComponent,
    UserComponent,
    AccountComponent,
    TransactionComponent,
    ShowtransactionsComponent,
    CreatetransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
