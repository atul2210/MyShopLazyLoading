
import {catchError,  tap, skipWhile } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { share, finalize } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable, throwError } from 'rxjs';
import { Ipagedata } from '../model/pagedata';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchServiceService {
  uri:string;
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) 
  {

  }
  public httpReqestInProgress: boolean = false;
  public httpItemReqestInProgress: boolean = false;
  private currentPage = 1;
  public news: Array<any> = [];

  private ItemcurrentPage = 1;
  public ItemArray: Array<any> = [];
  
  public CategoryCurrentPage=1;
  public categoryItemArray:Array<any>=[];
  public categoryhttpItemReqestInProgress:boolean=false;
public SearchResult(searchItem:string,pageindex:string,pagesize:string): Observable<any> 
{
    let querystring:string;
    this.uri=this.baseUrl+"/api/items/";
    querystring = "?Page="+pageindex+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true&itemSearch=" +searchItem ;
    return this.http.get<Ipagedata>(
    this.uri+"SearchItem/"+querystring, { observe: 'response'}).pipe(
   // catchError(this.handleError)
   );

}

// private handleError(error: HttpErrorResponse) {
//   if (error.error instanceof ErrorEvent) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error.message);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong,
//     console.error(
//       `Backend returned code ${error.status}, ` +
//       `body was: ${error.error}`);
//   }
//   // return an ErrorObservable with a user-facing error message
//   return throwError(
//     'Something bad happened; please try again later.');
//   }

  public SearchItems(page: number, pagesize:number,searchItem:string, saveResultsCallback: (news) => void) {
   
    let querystring:string;
    this.uri=this.baseUrl+"/api/items/";
    querystring = "?Page="+page+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true&itemSearch=" +searchItem ;
   
    return this.http.get(
    this.uri+"SearchItem/"+querystring).pipe(
    skipWhile(() => this.httpReqestInProgress),
    tap(() => { this.httpReqestInProgress = true; }))
    .subscribe((news: any[]) => {
      this.currentPage++;
      saveResultsCallback(news);
      this.httpReqestInProgress = false;
    })
    
  }
  public GetItems(page: number = 1, pagesize:number,saveItemResultsCallback: (ItemArray) => void) {
   
    let querystring:string;
    this.uri=this.baseUrl+"/api/items/";
    querystring = "?Page="+this.ItemcurrentPage+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true" ;
   
    return this.http.get(
    this.uri+"AllItemsOnPaging"+querystring).pipe(
    skipWhile(() => this.httpItemReqestInProgress),
    tap(() => { this.httpItemReqestInProgress = true; }))
    .subscribe((ItemArray: any[]) => {
      this.ItemcurrentPage++;
      saveItemResultsCallback(ItemArray);
      this.httpItemReqestInProgress = false;
    })
    
  }
  public GetItemsonPaging(page: number = 1, pagesize:number): Observable<any> {
   
    let querystring:string;
    this.uri=this.baseUrl+"/api/items/";
    querystring = "?Page="+this.ItemcurrentPage+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true" ;
    if (this.request$) {
      return this.request$;
    } else {
    return this.http.get(this.uri+"AllItemsOnPaging"+querystring)
      
    }
    
  }
  private request$: Observable<any>;
  private onFinalize(): void {
    this.request$ = null;
  }


    public AllItems(ChildMenuId:number, CategoryPageIndex: number , pagesize:number,saveCategoryItemResultsCallback: (categoryItemArray) => void) {
     
    
      let querystring:string;
      this.uri=this.baseUrl+"/api/items/";
      querystring = "?ChildMenuId="+ChildMenuId.toString() + "&Page="+CategoryPageIndex.toString()+ "&Count="+ pagesize +"&IsPagingSpecified=true&IsSortingSpecified=true" ;
      return this.http.get(
  
      this.uri+"AllItems"+querystring).pipe(
      skipWhile(() => this.categoryhttpItemReqestInProgress),
      tap(() => { this.categoryhttpItemReqestInProgress = true; }))
      .subscribe((categoryItemArray: any[]) => {
        this.CategoryCurrentPage;
        saveCategoryItemResultsCallback(categoryItemArray);
        this.categoryhttpItemReqestInProgress = false;
      })
     
  }

 
}




