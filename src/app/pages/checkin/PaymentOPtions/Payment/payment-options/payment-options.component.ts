import { Component, OnInit,Inject } from '@angular/core';
import {ShoppingApiService} from '../../../../../service/shopping-api.service';
import { HttpHeaders } from '@angular/common/http';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import { Router } from '@angular/router';
import {PaymentOptionService} from '../../../Payment-Options-Service'

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
data:any;
optradio:any;
  constructor(private pmtservice:PaymentOptionService,private router:Router,private service:ShoppingApiService,@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any) { 
     

  }

  ngOnInit() {

    //const idToken= this.localStorage.getItem("id_token");
     
  //   if(idToken)
  //  {
      //let header = new HttpHeaders();
      //header.set("Authorization","Bearer "+ idToken);

      this.service.GetPaymentOptions()
      .subscribe((res:Response)=>
        {
          
            this.data=res;
        }),
        
       err=>
       {
         
        this.router.navigateByUrl('/login');

       }
       
      }
      //else{
        //this.localStorage.removeItem("id_token");
        //this.localStorage.removeItem("expires_at");
        //this.localStorage.removeItem("fullName");
        //this.localStorage.removeItem("email");
       /// this.itemService.itemid=Number(this.itemid);
        ///this.itemService.itemIdLogin=Number(this.itemid);
        //this.router.navigateByUrl('/login');
     // }

  // }
   


   onItemChange(value){
 
    this.pmtservice.setPaymentOption=this.optradio;
   
   // let storage:string = this.localStorage.getItem("id_token");
  //let EmailId:string = this.localStorage.getItem("email");
  //this.router.navigateByUrl("/PlaceOrder/");
  
  // if(storage==null )
  // {
  //   this.router.navigateByUrl('/login');
  // }
  //   else
  //   {
       
        // this.router.navigateByUrl("/PlaceOrder/");
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
  //  }
    





 }
 MakePayment()
 {
  this.router.navigateByUrl("/PlaceOrder/");

 }  

}
