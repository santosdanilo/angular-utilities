import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorComponent } from './directives/control-error.component';
import { ControlErrorContainerDirective } from './directives/control-error.container';
import { FormSubmitDirective } from './directives/form-submit';
import { ControlErrorsDirective } from './directives/control-errors';
import { GroupErrorsDirective } from './directives/group-errors';

@NgModule({
  declarations: [
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
    ControlErrorsDirective,
    GroupErrorsDirective
  ],
  exports: [
    FormSubmitDirective,
    ControlErrorsDirective,
    GroupErrorsDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ControlErrorComponent
  ]
})
export class FormUtilitiesModule { }
