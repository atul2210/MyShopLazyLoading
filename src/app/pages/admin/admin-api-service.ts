
import {shareReplay, tap,  catchError,retry } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams, HttpRequest } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable,throwError } from 'rxjs';

////import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import {responseData,Ipagedata} from '../../model/pagedata';
import { environment } from '../../../environments/environment';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import {addnewitemrequest} from '../../model/AddNewItemRequest';
import {uploadneitem,SubMenu} from '../../model/UploadNewItem';




@Injectable()
export class adminapiservice {
    baseUrl = environment.baseUrl;
    uri:string;
 
constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient,private responseData:responseData)
  { 

  }

  GetNewItemDetails():Observable<addnewitemrequest>
  {
    
      this.uri=this.baseUrl+"/api/item/AddNewItemRequest";
      return this.http.get<addnewitemrequest>(this.uri);

  }

  UploadFile(fileToUpload :any,upld:uploadneitem):Observable<any>
  {
    
    const formData = new FormData();
    console.log(fileToUpload);
    
    for (let i = 0; i < fileToUpload.length; i++) {
      // this.upload(i, this.selectedFiles[i]);
      formData.append(fileToUpload[i].name, fileToUpload[i]);
  }

  /// formData.append('file', fileToUpload, fileToUpload.name);
  
   formData.append('ChileMenuId',upld.ChileMenuId.toString() );
   formData.append('GroupId',upld.GroupId.toString()); 
   formData.append('colorId', upld.colorId.toString()); 
   formData.append('deliveryCharges',upld.deliveryCharges.toString()); 
   formData.append('initialQty',upld.initialQty.toString());
   formData.append('itemDescription',upld.itemDescription); 
   formData.append('itemName',upld.itemName); 
   formData.append('offerPrice',upld.offerPrice.toString()); 
   formData.append('price',upld.price.toString());
   formData.append('sizeId',upld.sizeId.toString());
   formData.append('availableQty',upld.initialQty.toString());
   formData.append('supplierId',upld.supplierId.toString());
   formData.append('brand',upld.brand);
   
   console.log(formData);
    ///formData.append('file', fileToUpload);
    this.uri=this.baseUrl+"/api/item/UploadNewImages";
    return this.http.post<uploadneitem>(this.uri, formData, {reportProgress: true,responseType: 'json', observe: 'events'});
    
   /// const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    // const req = new HttpRequest('POST',this.uri, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.http.request(req);
    
  }
 
  Submenu (id:number):Observable<SubMenu>
  {
    this.uri=this.baseUrl+"/api/item/SubMenu?ParentId="+id;
    return this.http.get<SubMenu>(this.uri);

  }
  



}