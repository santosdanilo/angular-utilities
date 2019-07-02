//Found at https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Directive({
  selector: 'form[formUtility]'
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit').pipe(shareReplay(1))

  constructor(private host: ElementRef<HTMLFormElement>) { }

  get element() {
    return this.host.nativeElement;
  }
}
