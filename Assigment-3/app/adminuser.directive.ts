import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {

  @Input()  appIsAdmin: string = "";

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {

  }
  ngOnChanges() {

    if (this.appIsAdmin.toLowerCase() == "admin") {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}