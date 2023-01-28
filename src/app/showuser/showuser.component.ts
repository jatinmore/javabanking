import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  public user:User[];
  constructor(private _Userservice:UserserviceService) { }

  ngOnInit(): void {
    this._Userservice.getAllUsers().subscribe(
      data => this.user=data
    )
    console.log(this.user)
  }

}
