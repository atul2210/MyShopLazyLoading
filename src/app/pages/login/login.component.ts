import { Component, OnInit,Input, Inject } from '@angular/core';
import {tokenParams} from './token'
import {ShoppingApiService} from '../../service/shopping-api.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {authguard} from '../../service/auth-guard'
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { stringify } from '@angular/core/src/render3/util';
import { variable } from '@angular/compiler/src/output/output_ast';
import { LoadingIndicatorServiceService } from '../../service/loading-indicator-service.service';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { itemService } from '../itemdetails/itemdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  token:tokenParams=new tokenParams();
  details:any[];
  public redirectUrl: string;
  returnUrl:string;

  display='none'; //default Variable
  err:string;
  isOk=false;
  mobile:string="";
  loading:boolean=false;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,  private route: ActivatedRoute,private loadingIndicatorService: LoadingIndicatorServiceService,
            private router: Router,private authguard:authguard,  private http:ShoppingApiService, private fb:FormBuilder,private location:Location,private itemService:itemService) 
    
   {
    loadingIndicatorService
    .onLoadingChanged
    .subscribe(isLoading => this.loading = isLoading);
    
   /// this.itemService= new itemService();


   }
   
  ngOnInit():void {
  this.loginForm=this.fb.group({

        username:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        
        password:['',[Validators.required]],
        rememberme:{value:true,disabled:false}, //default value
        mobileNumber:['na',[Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

 }
  
 populateTestData():void {



}


  onSubmit() 
  {
    let userid = this.loginForm.controls["username"].value;
    let password =  this.loginForm.controls["password"].value;
    this.http.Login(userid,password)

    .subscribe(data=>
          { 
            this.isOk=false;
          this.http.userFullName(data.fullname)
          this.err="";
        ////  this.location.back();
        let itemid:number= this.itemService.itemIdLogin;
          
        if(itemid!==0)
        {
          if(itemid===undefined)
          this.router.navigateByUrl(`HomeComponent`);
          else
         // this.router.navigateByUrl(`/itemDetail/${itemid}`);
         this.router.navigateByUrl('PlaceOrder/');
          this.http.dispSignInYes(true);
        }
        else
        {
         // this.router.navigateByUrl('')
         this.router.navigateByUrl("/PlaceOrder/");
         this.http.dispSignInYes(true);
        }
        this.http.dispSignInYes(true);
       // this.router.navigateByUrl("checkin")
  })
    err => 
    {
     
      this.isOk=true;
        this.localStorage.setItem("id_token",'');
        this.err=err.statusText; 
     

    }
   
    this.isOk=true;
    this.err="Invalid User Id or Password";
    // <-- go back to previous location
  
}

openModalDialog()
{
  this.display='block'; //Set block css
  this.loginForm.controls["mobileNumber"].patchValue('');
  this.isOk=false;
  return false;
}

closeModel()
{
  this.display='none';
  //this.mobile="";
  this.loginForm.controls["mobileNumber"].patchValue('na');

}
public forgetpassword()
{
 
  this.router.navigateByUrl('forgetpassword');
}
public changepassword()
{
 
  this.router.navigateByUrl('changepassword');
}
async closeModalDialog()
{
    let resp;
    this.loginForm.controls["username"].setValue('na@na.com');
    this.loginForm.controls["password"].setValue('nana');
    this.mobile= this.loginForm.controls["mobileNumber"].value;
    if(this.mobile.trim()!="")
    {
      let res = await this.http.getOTP(this.mobile)
          .then((res:Response)=>{                 
            resp = res;
           
              this.isOk=false;
              this.display='none'; //set none css after close dialog
              this.router.navigateByUrl("/registration/"+this.mobile);
           
          })
          .catch(err=>
          {
            
            this.isOk =true;
            this.err=err;
            //this.router.navigateByUrl("/Error/"+"err" +"/logi/"+this.mobile);
          
          });
    }
    else
      return false;
    }

// get itemIdDetail():number
// {
//   return this.itemService.itemid;
// }



}

