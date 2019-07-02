//Found at https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5

import { InjectionToken } from '@angular/core';

export const defaultErrors = {
    required: (error) => `Este campo é obrigatório`,
    minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
    providedIn: 'root',
    factory: () => defaultErrors
});
