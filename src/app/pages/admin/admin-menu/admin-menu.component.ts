import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { AdminDirective } from '../admin.directive';
import{AddItemComponent} from '../add-item/add-item.component'
import{EditItemComponent} from '../edit-item/edit-item.component'


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
   AdminMenuItems = [
    {ItemName:"AddItem", DisplayName:"Add Item",component:AddItemComponent},
    {ItemName:"EditItem", DisplayName:"Edit Item",component:EditItemComponent}
  ];

  activeItem:string;
  tabs=[];
  

  @ViewChildren(AdminDirective) componentLoaders: QueryList<AdminDirective>;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) {


   }

  ngOnInit() {
  




  }

  menuItemClick(item:any)
  {
    let matchingTab= this.tabs.filter((tab)=>{
        return tab.ItemName==item.ItemName
    });
    if(matchingTab.length==0)
    {
    this.activeItem=item.ItemName;
    this.tabs.push({tabIndex:this.tabs.length,
      ItemName:item.ItemName,
      DisplayName:item.DisplayName
    
    })
    setTimeout(() => {
      var componentLoadersArray = this.componentLoaders.toArray();
      var componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

      var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
      viewContainterRef.createComponent(componentFactory);
    }, 100);
  }

  }
   
  }


