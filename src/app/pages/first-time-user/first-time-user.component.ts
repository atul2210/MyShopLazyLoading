import { Component, OnInit } from '@angular/core';
import {activateuserservce} from '../../service/ActivateUserService';
import {ShoppingApiService} from '../../service/shopping-api.service'
@Component({
  selector: 'app-first-time-user',
  templateUrl: './first-time-user.component.html',
  styleUrls: ['./first-time-user.component.css']
})
export class FirstTimeUserComponent implements OnInit {
  emailId:string;
  constructor(private activeservice:activateuserservce,private ShoppingApiService:ShoppingApiService) { }

  ngOnInit() {

    this.emailId=this.activeservice.getOption();
    this.ShoppingApiService.ActivateUserAccount(this.emailId,true)
    .subscribe(
     (data:Response) => {
      console.log(data);
    
  });

  }
}
