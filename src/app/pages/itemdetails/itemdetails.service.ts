import {Injectable} from '@angular/core';

@Injectable()

export class itemService{
constructor(){}
public itemid:number;

set itemIdLogin(object:number){
    this.itemid = object; 
 }

 get itemIdLogin(){
    return this.itemid;
 }




}