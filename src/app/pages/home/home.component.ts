import { Component, OnInit,Pipe, PipeTransform  } from '@angular/core';
import {SlidersComponent} from '../../pages/sliders/sliders.component';
import {ShoppingApiService} from '../../service/shopping-api.service';
import {responseData} from '../../model/pagedata'
import {BrowserModule, DomSanitizer, SafeHtml} from '@angular/platform-browser'
import {SearchServiceService} from '../../service/search-service.service';
import { LoadingIndicatorServiceService } from '../../service/loading-indicator-service.service';
import { Observable } from 'rxjs';
import { share, finalize } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})


export class HomeComponent implements OnInit  {
  data:string;  
  loading:boolean=false;
  pageindex:number=0;
  pagesize:number=0;
  pageArray:any[];
  count:number;
  dynamicHtml:string;
  private request$: Observable<any>;
  deviceInfo = null;
  constructor(private responseData:responseData,private ShoppingApiService:ShoppingApiService,private service:SearchServiceService,private loadingIndicatorService: LoadingIndicatorServiceService,private devideDetect:DeviceDetectorService,private titleService: Title, private metaService: Meta) {
    loadingIndicatorService
    .onLoadingChanged
    .subscribe(isLoading => this.loading = isLoading);


  }


  ngOnInit() {

    this.titleService.setTitle("Vidhim");
    this.metaService.addTags([
      {name: 'keywords', content:  'men women kids vidhim shopping kurti legging kids frocks online shopping '},
      {name: 'description', content: 'cheap rate www.vidhim.com all types of cheap range items online shopping kids women woman men man kid .'},
      {name: 'robots', content: 'subse sasta loot machi hai '}
    ]);



    this.deviceInfo = this.devideDetect.getDeviceInfo();
    const isMobile = this.devideDetect.isMobile();
    const isTablet = this.devideDetect.isTablet();
    const isDesktopDevice = this.devideDetect.isDesktop();

    if(isMobile) {this.pagesize=4; }
    if(isTablet) {this.pagesize=8;}
    if(isDesktopDevice)(this.pagesize=50);


    this.itemsarr=[]=[];
    this.onScrollDown();
 
  }


private  GetDynamicDiv(arr:any[])
{
  for(let item of arr)
  {
   
    this.data = this.data + "<ul>"
    this.data = this.data +  "<li id =" +item.itemid +">"
    this.data= this.data  + "<a  target='_blank' href='/itemDetail/" + item.itemid + "'>"
    this.data= this.data  + "<img src='"+ item.image + "' class='items' height='100px' width='100px'  />"
    this.data= this.data +  "</a>"
    this.data = this.data +  "<br clear='all' />"
    this.data = this.data +  "<div>"+ item.itemName + "</div>"
    this.data= this.data + "</li></ul>" 
    
  }

    return this.data;
}



toHTML(input) : any {
  


  return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
}

public itemsarr: Array<any> = [];
 
  public onScrollDown(): void {
  this.service.GetItems(this.pageindex,this.pagesize,(itemsarr)=>
  {
      this.count = itemsarr.count;
      
    
    if(this.itemsarr.length<this.count)
       {
        // for(let i =0;i<(itemsarr.results.length);i++ )
        // {
         
       
        //   itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;

        // }
         this.itemsarr = this.itemsarr.concat(itemsarr.results);
        
         
      }    
  });
}


// public onScrollDown(): void {
//   this.service.GetItemsonPaging(this.pageindex,this.pagesize)
 

//   .pipe(finalize(() => this.onFinalize()))
//   .subscribe((items) => {
//     this.pageindex++;
//     for(let i =0;i<(items.results.length-1);i++ )
//           {
           
//             if( items.results[i].image1!=='undefined')
//             items.results[i].image1 = 'data:image/jpeg;base64,' +  items.results[i].image1;
//           }



//     this.itemsarr = this.itemsarr.concat(items["results"]);
//     console.log(this.itemsarr);
//   });



    
  //     this.count = itemsarr.count;
  //     // alert(itemsarr.count);
       
   
    
  //   if(this.itemsarr.length<this.count)
  //      {
  //       for(let i =0;i<(itemsarr.results.length-1);i++ )
  //       {
         
  //         if( itemsarr.results[i].image1!=='undefined')
  //         itemsarr.results[i].image1 = 'data:image/jpeg;base64,' +  itemsarr.results[i].image1;
  //       }
  //        this.itemsarr = this.itemsarr.concat(itemsarr.results);
         
  //     }    
  // });

//}

private onFinalize(): void {
  this.request$ = null;
}

}



