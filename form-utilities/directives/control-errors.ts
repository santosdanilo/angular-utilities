import { NgControl } from '@angular/forms';
import { Directive, OnInit, Inject, Optional, Host, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { FORM_ERRORS } from './form-errors.provider';
import { FormSubmitDirective } from './form-submit';
import { Observable, EMPTY, merge } from 'rxjs';

import { ControlErrorComponent } from './control-error.component';
import { ControlErrorContainerDirective } from './control-error.container';

@Directive({
    selector: '[formControl][formUtility], [formControlName][formUtility]'
})
export class ControlErrorsDirective implements OnInit {
    ref: ComponentRef<ControlErrorComponent>;
    submit$: Observable<Event>;
    container: ViewContainerRef;

    constructor(
        private control: NgControl,
        @Optional() @Host() private form: FormSubmitDirective,
        @Inject(FORM_ERRORS) private errors,
        private vcr: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        @Optional() controlErrorContainer: ControlErrorContainerDirective) {
        this.submit$ = this.form ? this.form.submit$ : EMPTY
        this.container = controlErrorContainer ? controlErrorContainer.vcr : this.vcr;
    }

    ngOnInit(): void {
        merge(this.control.valueChanges, this.submit$)
            .subscribe(
                () => {
                    const controlErrors = this.control.errors;
                    if (controlErrors) {
                        const firstKey = Object.keys(controlErrors)[0];
                        const getError = this.errors[firstKey];
                        const text = getError(controlErrors[firstKey])
                        this.setError(text)
                    } else {
                        this.setError(null)
                    }
                }
            )
    }

    setError(text: string) {
        if (!this.ref) {
            const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
            this.ref = this.container.createComponent(factory)
        }
        this.ref.instance.text = text
    }
}