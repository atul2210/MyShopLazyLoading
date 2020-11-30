import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
