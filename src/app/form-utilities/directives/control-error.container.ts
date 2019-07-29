//Found at https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

import { ViewContainerRef, Directive } from "@angular/core";

@Directive({
    selector: '[controlErrorContainer]'
})
export class ControlErrorContainerDirective {
    constructor(public vcr: ViewContainerRef) { }
}
