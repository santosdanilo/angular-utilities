//Found at https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5
import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";

@Component({
    template: `
    <span class="help is-danger" [class.hide]="_hide">
    {{_text}}
    </span>`,
    styles: [`
        .help{
            display: inline-block;
            color: red;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {
    _text: string;
    _hide = true;

    @Input() set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
        }
    };

    constructor(private cdr: ChangeDetectorRef) { }
}
