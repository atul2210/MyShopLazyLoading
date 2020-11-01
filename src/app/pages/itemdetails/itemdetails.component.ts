import { Component, OnInit,Input,Output,EventEmitter, ɵConsole, Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingApiService} from '../../service/shopping-api.service';
import {HomepageComponent} from '../../home/homepage/homepage.component';
import {Globals} from '../../model/global';
////import { ColdObservable } from 'rxjs/testing/ColdObservable';
import {Iitems} from '../../pages/iitems';
import { Router } from '@angular/router';
import { CartItemServiceService } from '../../service/cart-item-service.service';
import { itemNotify, Inotify } from './item-notify';
import { HttpRequest, HttpHeaders } from '@angular/common/http'; 
import {itemService} from '../../pages/itemdetails/itemdetails.service';
import { LoadingIndicatorServiceService } from '../../service/loading-indicator-service.service';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';

import {ReactiveFormsModule,FormsModule,NgControl,  FormGroup,FormControl,ValidationErrors,Validator, Validators} from '@angular/forms'
import { min } from 'rxjs/operators';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
 
})
export class ItemdetailsComponent implements OnInit {
addedItemCount:number;  
//itemDetail:any[];

image1:any;
colorDetail:any[];
color:string;
quantity:number=1;
itemid:string;
colorname: string;
showSelected: boolean=false;
price:number;
offerprice:number;
deliverycharges:number;
img1:any;
coloId:number;
sizeName:string;
category:string;
brand:string;
availableQty:number;
breakpoint: number;
displayError:boolean=false;
loading:boolean=false;
myform: FormGroup;
sizes: FormControl;
selecteditemId;
minQty:number =1;
maxQty:number=0;
disableplus:boolean=false;
disableminus:boolean=true;
availableSizes:any[];
totalPaidAmount:number=1;
  constructor(@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any,  public restProvider:ShoppingApiService,public HomepageComponent:HomepageComponent,private route:ActivatedRoute, private globals:Globals,
    private router:Router, private CartItemServiceService:CartItemServiceService,private inotify:itemNotify,private loadingIndicatorService: LoadingIndicatorServiceService,private itemService:itemService

    
    
    ){
      loadingIndicatorService
      .onLoadingChanged
      .subscribe(isLoading => this.loading = isLoading);

    //////  this.itemService= new itemService();


  }
  itemDetail:any[]; 
  
  public ngOnInit()
  {
    //const img1 = require('./assets/thumbnail.jpg');
    //const img2 = require('./assets/thumbnail2.jpg');
    
    //$('#74').ezPlus();
   
    this.breakpoint = (this.window.innerWidth <= 400) ? 1 : 2;
    this.sizes= new  FormControl('',Validators.required);
    
    this.myform = new FormGroup({
    
      sizes:this.sizes,
    });


    
    this.itemid = this.route.snapshot.params["itemid"];
    this.selecteditemId=this.itemid;
    this.GetItemDetails(this.itemid);
  }



GetItemDetails(itemId:string)
{

  this.restProvider.itemDetails(itemId)
  .subscribe(
    data => {
    
      if(data.body.availableQty>0) 
      {
          
       // data.body.image1= data.body.image1;
      
        this.itemDetail= Array.of(data.body)
        console.log(this.itemDetail);
      // //   ///this.colorDetail =data.body.availableColor.split(";")
      // //  // this.colorname=this.colorDetail[0]
        this.price = data.body.price
        this.offerprice = data.body.offerPrice
        this.deliverycharges = data.body.deliveryCharges
        this.coloId = data.body.colorId
        this.sizeName = data.body.sizeName
        this.category = data.body.categoryName
        this.brand = data.body.brand
        this.availableQty = data.body.availableQty
        this.displayError=false;
        this.availableSizes=data.body.availableSize;
        this.maxQty=data.body.availableQty;
        this.totalPaidAmount=this.offerprice;
    }
    else  
    {
      this.displayError=true;
    }
  }
  
)



}



  overTitle(){
    if(this.showSelected == true){ ;
      this.showSelected = false;
    }
    else {
      this.showSelected = true; 
    }
  }

  
  addToCart()
  {
   ///   const idToken= this.localStorage.getItem("id_token");
     
      //if(idToken)
    //  {
     //   let header = new HttpHeaders();
    //    header.set("Authorization","Bearer "+ idToken);
    let sessionvalue=localStorage.getItem("userSession");
       
      this.restProvider.addToCart(this.itemid,this.minQty.toString(),sessionvalue)
    
      .subscribe(
        data => 
        { 
          this.inotify.totalCartItem = data.count; 
          this.notifyTotalItem(this.inotify);
          if(sessionvalue===null)
          {
           
           localStorage.setItem("userSession",data.sessionIdToken)
          }
          this.itemService.itemid=Number(this.itemid);
          this.itemService.itemIdLogin=Number(this.itemid);
          this.router.navigateByUrl('/checkin');
       },
       err=>
       {
        // this.localStorage.removeItem("id_token");
        // this.localStorage.removeItem("expires_at");
        // this.localStorage.removeItem("fullName");
        // this.localStorage.removeItem("email"); 
         this.router.navigateByUrl('/login');

       }
       );
     // }
      // else{
      //   this.localStorage.removeItem("id_token");
      //   this.localStorage.removeItem("expires_at");
      //   this.localStorage.removeItem("fullName");
      //   this.localStorage.removeItem("email");
        this.itemService.itemid=Number(this.itemid);
        this.itemService.itemIdLogin=Number(this.itemid);
      //   this.router.navigateByUrl('/login');
      // }
  }

    private getColor(colorName:string)
    {
      this.colorname=colorName;
    }

private notifyTotalItem(totalItem:Inotify)
{ 
  this.restProvider.changeSelectedItem(totalItem);
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
}

salequantityplus()
{
  this.minQty++;  
  this.disableminus=false;
  this.totalPaidAmount=this.offerprice*this.minQty;
  if(this.minQty==this.maxQty)
    {
      this.disableplus=true;
      
    }
    

}
salequantitminus()
{
  this.minQty--; 
  this.disableplus=false; 
  this.totalPaidAmount=this.offerprice*this.minQty;
  if(this.minQty==1)
    {
       
        this.disableminus=true;
    }
    

}


// get ItemidWithoutLogin():number 
// {

// }

// set ItemidWithoutLogin(value:number)
// {
//   this.itemService.itemid=Number(this.itemid);
//   alert(`call from Setter: ${this.itemid}` );
// }
imgout:string;
private hoverSmallImage(img:string)
{
  
  this.imgout= this.itemDetail[0].image1
  this.itemDetail[0].image1=img;
}

private outSmallImage()
{
 
  this.itemDetail[0].image1=this.imgout;
 

}

}
