import { Component, OnInit,Inject,Injectable, ViewChild, ViewEncapsulation } from '@angular/core';
import {ShoppingApiService} from '../../service/shopping-api.service';
import { itemNotify } from '../itemdetails/item-notify';
import { Router } from '@angular/router';
/////import { DOCUMENT } from '@angular/platform-browser';

import { DOCUMENT } from '@angular/common';
import {LoadingIndicatorServiceService} from '../../service/loading-indicator-service.service'
import {checkedInItems,checkedInItemsArray} from '../../model/checkedInItems';
import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Console } from 'console';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
 // encapsulation: ViewEncapsulation.Emulated,

styles: [
    `
      @media screen and (max-width: 800px) {
        .desktop-hidden {
          display: initial;
        }
        .mobile-hidden {
          display: none;
        }
      }
      @media screen and (min-width: 800px) {
        .desktop-hidden {
          display: none;
        }
        .mobile-hidden {
          display: initial;
        }
      }
    `
  ]



})
@Injectable()
export class CheckinComponent implements OnInit {
  cartItems:any;
  loading:boolean=false;
  @ViewChild('myTable',{static:false}) table: any;

  rows: any;
  expanded: any = {};
  timeout: any;
  OfferPriceSum:number=0;
  saveSum:number=0;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, @Inject(DOCUMENT) private document: any, private ShoppingApiService:ShoppingApiService,private itemnotify:itemNotify,
  private route:Router,private loadingIndicatorService: LoadingIndicatorServiceService,private location: Location ) { 

    loadingIndicatorService
    .onLoadingChanged
    .subscribe(isLoading => this.loading = isLoading);
   

  }

  ngOnInit() {
    this.GetCheckedInItems();
    
   
  } 

async GetCheckedInItems()
{
  let userSessionid:string;  
  userSessionid = this.localStorage.getItem("userSession"); 
  
  if(userSessionid!==null)
  {
   
    await this.ShoppingApiService.getCheckedInItem(userSessionid)
      .subscribe(
        (data:checkedInItemsArray) => { 
        
       // this.cartItems= data.body;
       
        // for(let i =0;i<this.cartItems.length;i++ )
        // {
         
        //   if( this.cartItems[i].image1!=='undefined')
        
        //   this.cartItems[i].image1 = 'data:image/jpeg;base64,' +  this.cartItems[i].image1;
        // }
        
        this.rows = data.body; //this.cartItems;
      //  console.log(this.rows);
       
        this.itemnotify.totalCartItem = this.rows.length;
        this.getSum(this.rows);
      //  console.log(this.rows);
        return this.rows;
       
        });
  }
}

public getSum(sum:any[]) {
  this.OfferPriceSum=0;
  this.saveSum=0;
  for(var i = 0; i < sum.length; i++){
    this.OfferPriceSum =this.OfferPriceSum+this.OfferPriceSum+sum[i].offerprice;
    this.saveSum = this.saveSum + ((sum[i].price) - (sum[i].offerprice))*sum[i].quantity;
   
  }
  
}

public myFunction(item) {
document.getElementById("demo").innerHTML = this.rows.reduce(this.getSum);
}
 public RemoveItems(itemid:string,quantity:string,checkinid:string)
  {
   
    const idToken=localStorage.getItem("userSession");;
      
    if(idToken)
    {
      let header = new HttpHeaders();
      header.set("Authorization","Bearer "+ idToken);
    }
    else
     { this.route.navigateByUrl('/login');}

          this.ShoppingApiService.RemoveItem(itemid,quantity,idToken,checkinid)
          .subscribe((res)=>
          {
            
            this.GetCheckedInItems();
            
      });
      
      this.ShoppingApiService.changeSelectedItem(this.itemnotify);

  }

private notify():void
{
  this.ShoppingApiService.changeSelectedItem(this.itemnotify)
  

}


 placeOrder()
{
  this.route.navigateByUrl('checkin/pmt');
  /*
  let storage:string = this.localStorage.getItem("id_token");
  let EmailId:string = this.localStorage.getItem("email");

  
  if(storage==null )
  {
    this.route.navigateByUrl('/login');
  }
    else
    {
        console.log("Move to payment gateway");
        this.route.navigateByUrl("/PlaceOrder/");
        // if(EmailId!=='undefined')
        // {
        //   this.ShoppingApiService.paymentreceive(EmailId,localstorage,this.rows)
        //   .subscribe((res:Response) =>
        //   {
          
        //     //if status code is unauthorized.. need to redirect login page with error message
        //   },
        //   err => 
        //   {
        //     if(err.status!==200)
        //     {
        //       localStorage.removeItem("id_token");
        //       this.route.navigateByUrl('/login')
        //     }

        //   }
       
        
        //);
       // }
    }
    */


  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
     // console.log('paged!', event);
    }, 100);
  }
fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
   
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }



}






