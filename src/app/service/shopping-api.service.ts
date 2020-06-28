
import {shareReplay, tap,  catchError,retry } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable,throwError } from 'rxjs';
import {allItems} from '../model/allitems'
////import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import {tokenParams} from '../pages/login/token'
import { BehaviorSubject, Subject } from 'rxjs';
import {responseData,Ipagedata} from '../model/pagedata';
import {registration,EditAddress} from '../model/registration'
import { Inotify,itemNotify } from '../pages/itemdetails/item-notify';
import * as moment from "moment";
import {checkedInItems,checkedInItemsArray} from '../model/checkedInItems';
import { rsetpassword } from '../model/resetpassword';
import { environment } from '../../environments/environment';
import { NotifyUserfullName } from '../pages/login/Notify-UserName';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';



@Injectable()
export class ShoppingApiService {
uri:string;
baseUrl = environment.baseUrl;
public addToCardResponse :any[];
private loggedIn = false;
private json: any;

private subject = new Subject<itemNotify|null>()

private userFullNamesubject = new Subject<string|null>()
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient,private responseData:responseData)
  { 

  }
  public redirectUrl: string;
  AllItems(category:string,index:string): Observable<any> 
  {
    this.uri=this.baseUrl+"/api/items/";
    const params = new HttpParams().set('categoryId', category).set("pageIndex",index);
     return this.http.get(
     this.uri+"AllItems/", { observe: 'response', params}).pipe(
     
   ///  catchError(this.handleError )
   );
 
     
  }


  itemDetails(itemId:string): Observable<any> 
  {
    this.uri=this.baseUrl+"/api/items/";
    const params = new HttpParams().set('itemId', itemId);
     return this.http.get(
     this.uri+"itemDetail/", { observe: 'response', params}).pipe(
    // catchError(this.handleError )
    );
  }


addToCart(itemid:string,quantity:string): Observable<any>
{
  let querystring:string;
  let id_token:string;

  id_token=this.localStorage.getItem("id_token");
 
  querystring = "?itemid=" + itemid+ "&quantity="+quantity+ "&sessionId=" + id_token ;
  this.uri=this.baseUrl+"/api/items/";

  return this.http.post(
  this.uri+"addCart"+querystring,{ observe: 'response'}).pipe(
   //catchError(this.handleError)
   );

}

getCheckedInItem(sessionId:string):Observable<any>
{
  let querystring:string;
  ////let sessionToken:string
  
  this.uri=this.baseUrl+"/api/items/";

  const params = new HttpParams().set('userSession', sessionId);
  return this.http.get<checkedInItemsArray[]>(
  this.uri+"getcheckedinItem", { observe: 'response', params}).pipe(
  
  
  //catchError(this.handleError)
  );

  

}

public RemoveItem(itemid:string,quantity:string,sessionId:string,checkinid:string):Observable<any>
{
  let querystring:string; 
 
  querystring = "?itemid=" + itemid+ "&returnedItemQty="+quantity + "&sessionId="+sessionId + "&checkedinId="+checkinid ;
  this.uri=this.baseUrl+"/api/items/";
  return this.http.post(
  this.uri+"RemoveItems"+querystring,{ observe: 'response'}).pipe(
  // catchError(this.handleError.bind(this) )
  );
}

// private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an ErrorObservable with a user-facing error message
//     return throwError(error.error
//       );
//   };



public Login(userId:string,password:string):Observable<any>
{
  this.localStorage.removeItem('id_token');
  this.localStorage.removeItem("expires_at"); 
  this.localStorage.removeItem("email");
  this.localStorage.removeItem("fullName");
  let encodedval = btoa(userId+":"+password);
  this.uri=this.baseUrl+"/api/token/";
  let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', encodedval);
  
   return this.http.get(this.uri,{headers:headers}).pipe(
   tap((res) =>{
    this.localStorage.setItem("email",userId);
    this.setSession(res); 
   }), 
   shareReplay(),
  // catchError(this.handleError),
   );


};


private setSession(authResult) {
  var currentDate = moment(authResult.expiration);
  var futureMonth = moment(currentDate).add(1, 'M');
  var futureMonthEnd = moment(futureMonth).endOf('month');
  
  if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
      futureMonth = futureMonth.add(1, 'd');
  }
  var tokenExpire = currentDate.add(5,"days");
  this.localStorage.setItem('id_token', authResult.authToken);
  this.localStorage.setItem("expires_at",tokenExpire.toString()); 

  


  
 ///// const expiresAt = moment().add(authResult.expiration,'minute');
  
  ///localStorage.setItem('id_token', authResult.authToken);
  ///localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}      

logout() {
  this.localStorage.removeItem("id_token");
  this.localStorage.removeItem("expires_at");
  this.localStorage.removeItem("fullName");
  this.localStorage.removeItem("email");
  
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = this.localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}   



public GetHomePageItems(pagesize:string,pageindex:string):Observable<any>
{
     let querystring:string;
     this.uri=this.baseUrl+"/api/items/"; 
     querystring = "?Page="+pageindex+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true" ;
     return this.http.get<Ipagedata>(
     this.uri+"AllItemsOnPaging/"+querystring, { observe: 'response'}).pipe(
    // catchError(this.handleError )
     );
}

     public addUser(user:registration):Observable<any>
     {
      this.localStorage.removeItem('id_token');
      this.localStorage.removeItem("expires_at"); 
      this.localStorage.removeItem("email");
      this.localStorage.removeItem("fullName");
      this.uri=this.baseUrl+"/api/user/NewUser/";
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      return this.http.post<registration>(this.uri,
          {
            "emailId": user.myemail,
            "password": user.password,
            "firstName": user.firstName,
            "middleName": user.middleName,
            "lastName": user.lastName,
            "mobile": user.mobile,
            "ulternateMobile": user.ulternateMobile,
            "address":user.address,
            "city":user.city,
            "state":user.mystate,
            "pin":user.pin,
            "enterOPT":user.otp
           

          },
          {
              headers:headers
          }

      ).pipe(
      catchError(this.handError),
      tap((res) =>
      {
       
        this.localStorage.setItem("email",user.myemail);
      }),);


     }
     

private handError(errorResponse:HttpErrorResponse)
{
  if(errorResponse.error instanceof ErrorEvent)
  {
    console.log("client side error",errorResponse.error.message);
  }
  else
  {
    console.log("server side error",errorResponse);
  }
  return throwError(errorResponse);
}

public changeSelectedItem(totalItem:itemNotify|null)
{
  this.subject.next(totalItem);
}
getItem():Observable<any>
{
  return this.subject.asObservable();

}

public userFullName(fullName:string|null)
{
 
  return this.userFullNamesubject.next(fullName);

}
getUserFullName():Observable<any>
{
  return this.userFullNamesubject.asObservable();

}


public async getOTP(mobile:string) :Promise<any>
{
  
  this.uri=this.baseUrl+"/api/sms/Otpsender?mobileNumber="+mobile;
   return await this.http.get<Promise<optResponse>>(this.uri, { observe: 'response'}).pipe(
   tap((res) =>{
   
   }), 
  // .shareReplay()
  // catchError(this.handleError )
   //,
   )
   .toPromise()
};



public async ResetPassword(email:string):Promise<any>
{
  
  this.uri=this.baseUrl+"/api/sms/ResetPassword?email="+email;
   return await this.http.get<Promise<rsetpassword>>(this.uri, { observe: 'response'}).pipe(
   tap((res) =>{
   // this.setOTP(res)
   }), 
  // .shareReplay()
   //catchError(this.handleError ),
   )
   .toPromise()
};

 
  
  public paymentreceive(session:string,registration:registration)
  {
    
      this.uri=this.baseUrl+"/api/items/CheckoutPaymentReceived?UserSession="+session;
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      return this.http.post(this.uri,registration,
          {
              headers:headers
          });
        

  }


  public SaveEditedAddress(edit:EditAddress)
  {
    
      this.uri=this.baseUrl+"/api/items/EditAddress";
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      return this.http.put(this.uri,edit,
          {
              headers:headers
          });
        

  }


public  changepassword(email:string,password:string,confirmpassword:string):Observable<any>
{
  this.uri=this.baseUrl+"/api/sms/ChangePassword?email="+email+"&password="+password+"&confirmpassword="+confirmpassword;
  return  this.http.get(this.uri, { observe: 'response'}).pipe(
 // catchError(this.handleError )
  );

}
public getimages()
{
  this.uri=this.baseUrl+"/api/File/images";
  return  this.http.get(this.uri, { observe: 'response'}).pipe(
 
 // catchError(this.handleError)
  );

}


GetAddress(sessionId:string):Observable<any>
{
  
  this.uri=this.baseUrl+"/api/User/";

  const params = new HttpParams().set('usersession', sessionId);
  return this.http.get<checkedInItemsArray[]>(
  this.uri+"Address", { observe: 'response', params}).pipe(
 // catchError(this.handleError )
  );
}


GetStates():Observable<any>
{
  
  this.uri=this.baseUrl+"/api/User/";

  return this.http.get(
  this.uri+"GetStates", { observe: 'response'}).pipe(
 // catchError(this.handleError )
  );
}

ActivateUserAccount(email:string,active:boolean):Observable<any>
{
  
  this.uri=this.baseUrl+"/api/User/";
  this.uri=this.baseUrl+"/api/User/ActivateUser?Activate="+active +"&email="+email;
 
  return this.http.get(
    this.uri).pipe(
  )
   
  
}




}




export class optResponse
{
 constructor(@Inject(LOCAL_STORAGE) private localStorage: any) {}


  status:string;
  message:string;
}




