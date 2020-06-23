import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable()
export class SingletonService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, ) { 

  }

  session:string = this.localStorage.getItem("id_token");
}
