import { Component, OnInit,AfterViewInit,ElementRef, Inject } from '@angular/core';
import {ReactiveFormsModule,FormsModule,NgControl,  FormGroup,FormControl,ValidationErrors,Validator, Validators} from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router'
import {registration} from '../../model/registration'
import {ShoppingApiService} from '../../service/shopping-api.service'
import {LoginComponent} from '../login/login.component';
import { LOCAL_STORAGE } from '@ng-toolkit/universal'
import {activateuserservce} from '../../service/ActivateUserService';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
//////  isOtpOK:boolean=true;
  states: string[] = [
    // 'Uttar Pradesh',
    // 'Delhi',
    // 'Madhya Pradesh',
  ];
  citeis:any=null;
  selectedState;

  response:any=null;

  myform: FormGroup;
  mobile:FormControl;
  firstName: FormControl;
  middleName:FormControl;
  lastName: FormControl;
  myemail: FormControl;
  password: FormControl;
  //language: FormControl;
  city:FormControl;
  address:FormControl;
  mystate:FormControl;
  ulternatemobile:FormControl;
  pin:FormControl;
  otp:FormControl;
  ResState:any;
  afterSubmit:boolean=false;
  entMobile:number
  err:any;
  messege:string="";


  
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private ActivatedRoute:ActivatedRoute,private router:Router,private ShoppingApiService:ShoppingApiService,private activateuserservce:activateuserservce) { }
  submitted:boolean;
  
  ngOnInit() {
    let userform:FormGroup;
    
    this.createFormControls();
    this.createForm();
   
    //this.myform.controls["mobile"].patchValue(this.ActivatedRoute.snapshot.params['mobile']);
    
    this.ShoppingApiService.GetStates()
    .subscribe((res)=>
    {
      this.ResState=res.body;
      this.states=this.ResState;
      console.log("states",this.states)
      
    });



    }
    createFormControls() {
      this.mobile= new  FormControl('',Validators.required)
      this.firstName = new FormControl('', Validators.required);
      this.middleName = new FormControl('');
      this.lastName = new FormControl('', Validators.required);
      this.myemail = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]);
      this.city = new FormControl('',Validators.required);
      this.address= new FormControl('',Validators.required);
      this.mystate= new FormControl('',Validators.required);
      this.ulternatemobile = new FormControl('');
      this.pin= new FormControl('',Validators.required);
      this.otp = new FormControl('');
    }
  
    createForm() {
      this.myform = new FormGroup({
        //name: new FormGroup({
        mobile:this.mobile,
        firstName: this.firstName,
        middleName:this.middleName,
        lastName: this.lastName,
        myemail: this.myemail,
        password: this.password,
        address:this.address,
        city: this.city,
        mystate:this.mystate,
        ulternatemobile:this.ulternatemobile,
        pin:this.pin,
        otp: this.otp
     //}),
      });
    }

    save() 
    { 

     
      if(this.myform.valid)
      {

        let data: registration;
        data = new registration();
        data.mobile = this.myform.controls['mobile'].value; 
        data.ulternateMobile = this.myform.controls["ulternatemobile"].value;
        data.firstName = this.myform.controls["firstName"].value;
        data.middleName = this.myform.controls["middleName"].value;
        data.lastName = this.myform.controls["lastName"].value;
        data.myemail = this.myform.controls["myemail"].value;
        data.password = this.myform.controls["password"].value;
        data.address = this.myform.controls["address"].value;
        data.city = this.myform.controls["city"].value;
        data.mystate = this.myform.controls["mystate"].value;
        data.pin = this.myform.controls["pin"].value;
        data.otp = +this.myform.controls["otp"].value;
        this.activateuserservce.setOption('email',this.myform.controls["myemail"].value);
        this.afterSubmit=true;


          this.ShoppingApiService.addUser(data)
          .subscribe((m:Response)=>
          {
            this.response=m;
            this.err=this.response;
            this.router.navigateByUrl('/NewUserActivate')
          },
          (err) => 
          {
          
            console.log(err);
            this.router.navigateByUrl("/Error/"+err.error.error +"/regis/"+data.mobile )
          });
    }
  }
    
  GetCities(StateId:string)
  {

   
    this.ShoppingApiService.GetCities(StateId)
    .subscribe((res:Response)=>
    {
        this.citeis=res.body
        console.log(this.citeis)
    });
  }

  async proceed()
  {
   // this.afterSubmit=true;
  //   this.myform.controls["otp"].setErrors({'incorrect': false});
  // this.myform.controls["otp"].clearValidators();
  // this.myform.controls["otp"].updateValueAndValidity;


  
  ////  this.myform.controls["otp"].setValue("######");
  
    
    if(this.myform.valid)
    {

 /////     this.myform.controls["otp"].setErrors({'incorrect': false});
     

         
            let res = await this.ShoppingApiService.getOTP(this.myform.controls["mobile"].value)
                .then((res:Response)=>{                 
                this.messege= "We have send an OTP to your Mobile Number " + this.myform.controls["mobile"].value + "  Please check and enter OTP."
                })
                .catch(err=>
                {
                  
                
                  this.err=err;
                  //this.router.navigateByUrl("/Error/"+"err" +"/logi/"+this.mobile);
                
                });
                this.afterSubmit=true;

    }
          
        this.myform.controls["otp"].setValidators(Validators.required);
        this.myform.controls["otp"].updateValueAndValidity;
  
    
  }

  goback()
  {
    this.afterSubmit=false;
  }


  }

  


