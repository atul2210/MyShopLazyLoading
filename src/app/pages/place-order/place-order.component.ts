import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShoppingApiService} from '../../service/shopping-api.service';
import { Router } from '@angular/router';
import {SingletonService} from '../../service/singleton.service';
import {ReactiveFormsModule,FormsModule,NgControl,  FormGroup,FormControl,ValidationErrors,Validator, Validators} from '@angular/forms';
import {registration,EditAddress} from '../../model/registration';
import { LOCAL_STORAGE } from '@ng-toolkit/universal'
import { Subscription } from "rxjs/Subscription";
import { Inotify,itemNotify } from '../../pages/itemdetails/item-notify';
import { Console } from 'console';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  myform: FormGroup;
  username:FormControl;
  userMiddleName:FormControl;
  userLastName:FormControl;
  address:FormControl;
  city:FormControl;
  mystate:FormControl;
  pin:FormControl;
  resp:any=null;
  state:string[];
  isEdited:boolean =false;
  isDisplayButton:boolean =true;
  @ViewChild('focusonAddress',{static:false})
  focusonAddress:ElementRef;
  currentLesson:boolean=false;
  cities:any=null;
  ResState:any;
  states: string[] = [];
  selectedState;
  editSelectedCity;
  editselectedState;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, public totalItem:itemNotify,private singleton:SingletonService,private route:Router,private active:ActivatedRoute,private service:ShoppingApiService) { }
  
  get currentsession():string
  {
    return this.singleton.session;
  }
  set currentsession(value:string)
  {
    this.singleton.session=value;
  }
 private subscription: Subscription;
 
  ngOnInit() 
  {
    let userform:FormGroup;
    this.createFormControls();
    this.createForm();
    this.GetAddress(this.localStorage.getItem("id_token"));
    this.subscription= this.service.getItem()
    .subscribe( 
        ttlItems=>
        {
         this.totalItem = ttlItems; 
         
        });




        this.service.GetStates()
        .subscribe((res)=>
        {
          this.ResState=res.body;
          this.states=this.ResState;
         
          
        });


       

  }
  

  GetAddress(sessionId:string)
  {
    this.service.GetAddress(this.currentsession)
    .subscribe((res:Response)=>
    {
     
   
      this.myform.controls["userMiddleName"].setValue(res.body["middleName"]==='undefined'?'':res.body["middleName"]);
      this.myform.controls["userLastName"].setValue(res.body["lastName"]);
      this.myform.controls["address"].setValue(res.body["address"]);
     // this.myform.controls["city"].setValue(res.body["city"]);
      this.myform.controls["pin"].setValue(res.body["pin"]);
      this.myform.controls["username"].setValue(res.body["firstName"]);
      
      this.editselectedState=res.body["state"]
     
      this.editSelectedCity=res.body["city"]
      this.GetCities(this.editselectedState);
      

         }
    );

  }

  


  Order(ee)
  {
    if(ee===true)
    {
     
    if(this.totalItem.totalCartItem===0) 
        {this.currentLesson=true;     return false; }
         else {
           this.currentLesson=false
       
          };
    let regis= new registration();
    
    if(this.currentsession!=='undefined')
    {
      //alert(this.myform.controls["userMiddleName"].value);
      regis.middleName =  this.myform.controls["userMiddleName"].value==='undefined'?'':this.myform.controls["userMiddleName"].value;
      regis.lastName= this.myform.controls["userLastName"].value;
      regis.address= this.myform.controls["address"].value;
      regis.city= this.myform.controls["city"].value;
      regis.pin= this.myform.controls["pin"].value;
      regis.firstName= this.myform.controls["username"].value;
      regis.state= this.myform.controls["mystate"].value;
     
      regis.PrivacyAgreed=ee;

     



    
      this.service.paymentreceive(this.currentsession,regis)
        .subscribe((res:Response) =>
        {
        
          this.resp =res; 
        
            this.route.navigateByUrl("/PmtRecevdThanks")
        
          //if status code is unauthorized.. need to redirect login page with error message
        },
      err => 
      {
        if(err.status!==200)
        {
          this.localStorage.removeItem("id_token");
          this.route.navigateByUrl('/login');
        }

      

      });
    
   

      }
    }
  }


  createForm() {
    this.myform = new FormGroup({
      //name: new FormGroup({
      
      address:this.address,
      city:this.city,
      mystate:this.mystate,
      pin:this.pin,
      username:this.username,
      userLastName:this.userLastName,
      userMiddleName:this.userMiddleName

      
    });
  }
  createFormControls() {
    this.username=new FormControl({value:'',disabled:true},Validators.required);
    this.city = new FormControl({value: '', disabled: true},Validators.required);
   
    this.mystate= new FormControl({value: '', disabled: true},Validators.required);
   
    this.pin= new FormControl({value: '', disabled: true},Validators.required);
    this.address= new FormControl({value: '', disabled: true},Validators.required);
    this.userMiddleName=new FormControl({value: '', disabled: true});
    this.userLastName=  new FormControl({value: '', disabled: true},Validators.required);
  
  }

     

      EditAddress()
      {
        this.isEdited=true;
        this.isDisplayButton =false;
        this.myform.controls["address"].enable();
        this.myform.controls["city"].enable();
        this.myform.controls["pin"].enable();
        this.myform.controls["mystate"].enable();
        this.myform.controls["username"].enable();
        this.myform.controls["userMiddleName"].enable();
        this.myform.controls["userLastName"].enable();

        this.focusonAddress.nativeElement.focus();
       

      }

      SaveAddress()
      {
        let edit = new EditAddress();
        edit.middleName =  this.myform.controls["userMiddleName"].value==='undefined'?'':this.myform.controls["userMiddleName"].value;
        edit.lastName= this.myform.controls["userLastName"].value;
        edit.address= this.myform.controls["address"].value;
        edit.city= this.myform.controls["city"].value;
        edit.pin= this.myform.controls["pin"].value;
        edit.firstName= this.myform.controls["username"].value;
        edit.state= this.myform.controls["mystate"].value;
        edit.emailId=this.localStorage.getItem("email");
       


      
            this.service.SaveEditedAddress(edit)
            .subscribe((res:Response)=>
                {
                  this.resp=res;
                  this.isEdited=false;
                
                  this.isDisplayButton =true;
                },
                      err => 
                {
                  this.isEdited=false;
                  this.isDisplayButton =true;
                  if(err.status!==200)
                  {
                    this.localStorage.removeItem("id_token");
                    this.route.navigateByUrl('/login');
                  }
            });
      }



      GetCities(StateId:string)
      {
    
        
       
        this.service.GetCities(StateId)
       
        .subscribe((res:Response)=>
        {
            this.cities=res.body
            console.log('cities9999 ',this.cities)
        });
      }


      ngOnDestroy()
      {
        this.subscription.unsubscribe();
       
      }

}
