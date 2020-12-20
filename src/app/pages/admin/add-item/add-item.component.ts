import { FocusMonitor } from '@angular/cdk/a11y';
import {adminapiservice} from '../admin-api-service';
import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {addnewitemrequest} from '../../../model/AddNewItemRequest';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {uploadneitem,SubMenu} from '../../../model/UploadNewItem';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  admingroup:FormGroup;

  supplier:FormControl;
  itemdescription:FormControl;
  size:FormControl;
  category:FormControl;
  mainmenu:FormControl;
  submenu:FormControl;
  price:FormControl;
  offerprice:FormControl;
  color:FormControl;
  deliverycharges:FormControl;
  uploadimage:FormControl;
  brandname:FormControl;
  quantity:FormControl;
  itemname:FormControl;

  supps:any[];
  sizes:any[];
  menu:any[];
  colors:any[];
  selectedFile: File;
  public progress: number;
  public message: string='';
  selectmainSubMenu:number;
  selectColor:number;
  selectSize:number;
  selectSupplier:number;
  mennu:SubMenu;
  selectmainMenu:number;

  selectedFiles: FileList;
  progressInfos = [];
 

  fileInfos: Observable<any>;
files:File[]=[];

  @Output() public onUploadFinished = new EventEmitter();
  upld = new uploadneitem();


  constructor(private adminapiservice:adminapiservice) { 
   
  }

  ngOnInit() {
    this.createFormControls();
    this.CreateFromGroup();
    
    this.GetNewItemDetails();
  }
private CreateFromGroup()
{
  
 this.admingroup= new FormGroup({
    supplier:this.supplier,
    itemdescription:this.itemdescription,
    size:this.size,
//    category:this.category,
    mainmenu:this.mainmenu,
    submenu:this.submenu,
    price:this.price,
    offerprice:this.offerprice,
    color:this.color,
    deliverycharges:this.deliverycharges,
    uploadimage:this.uploadimage,
    brandname:this.brandname,
    quantity:this.quantity,
    itemname:this.itemname
  });


}
unamePattern = "^[0-9]*$";
createFormControls() {
  this.supplier= new  FormControl('',Validators.required);
  this.itemdescription  = new FormControl('',Validators.required);
  this.size= new FormControl('',Validators.required);
  //this.category = new FormControl('',Validators.required);
  this.mainmenu = new FormControl('',Validators.required);
  this.submenu = new FormControl('',Validators.required);
  this.price = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
  

  this.offerprice = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
  this.color = new FormControl('',Validators.required);
  this.deliverycharges = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
  this.uploadimage = new FormControl('',Validators.required);
  this.brandname = new FormControl('',Validators.required);
  this.quantity= new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]);
  this.itemname= new FormControl('',Validators.required);
}

async GetNewItemDetails()
{
  
  await this.adminapiservice.GetNewItemDetails()
  .subscribe(res=>{
    this.supps=res[0].supplierList;
    this.sizes=res[0].sizes;
    this.menu=res[0].menu;
    this.colors=res[0].colors;
    console.log(this.menu);
    
  });
}

 uploadFile = (files) => {
debugger;
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  
  this.upld.ChileMenuId=+this.selectmainSubMenu;
  this.upld.GroupId=0;
  this.upld.colorId=+this.selectColor
  this.upld.deliveryCharges= this.admingroup.controls['deliverycharges'].value; 
  this.upld.initialQty=+this.admingroup.controls['quantity'].value; 
  this.upld.itemDescription =this.admingroup.controls['itemdescription'].value; 
  this.upld.itemName= this.admingroup.controls['itemname'].value; 
  this.upld.offerPrice = +this.admingroup.controls['offerprice'].value; 
  this.upld.price=+this.admingroup.controls['price'].value; 
  this.upld.sizeId=+this.selectSize;
  this.upld.supplierId=+this.selectSupplier;
  debugger;

 //// let fileToUpload = <File>files[files.length];
   ////  this.adminapiservice.UploadFile(fileToUpload,this.upld)
    // this.adminapiservice.UploadFile(fileToUpload,this.upld)
     this.adminapiservice.UploadFile(fileToUpload,this.upld)
    .subscribe(event =>
    {
      if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body)
        }
      });

  
  }

  async SubMenu(id:number)
  {
    this.adminapiservice.Submenu(id)
    .subscribe((res:SubMenu) =>
    {
      this.mennu=res;
      console.log(this.selectmainMenu);
      console.log('ccc',this.mennu);
     });

  }


  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    this.message = '';
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
     // this.upload(i, this.selectedFiles[i]);
    }
     this.upload();
  }


  ////async upload(idx, file) {
    async upload() {
    this.upld.ChileMenuId=+this.selectmainSubMenu;
    this.upld.GroupId=0;
    this.upld.colorId=+this.selectColor
    this.upld.deliveryCharges= this.admingroup.controls['deliverycharges'].value; 
    this.upld.initialQty=+this.admingroup.controls['quantity'].value; 
    this.upld.itemDescription =this.admingroup.controls['itemdescription'].value; 
    this.upld.itemName= this.admingroup.controls['itemname'].value; 
    this.upld.offerPrice = +this.admingroup.controls['offerprice'].value; 
    this.upld.price=+this.admingroup.controls['price'].value; 
    this.upld.sizeId=+this.selectSize;
    this.upld.supplierId=+this.selectSupplier;

    for (let i = 0; i < this.selectedFiles.length; i++) {
      // this.upload(i, this.selectedFiles[i]);
    
    this.progressInfos[i] = { value: 0, fileName: this.selectedFiles[i].name };
  }
    await this.adminapiservice.UploadFile(this.selectedFiles,this.upld).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[0].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          /////this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[0].value = 0;
        //this.message = 'Could not upload the file:' + file.name;
      });
  }

  
}




