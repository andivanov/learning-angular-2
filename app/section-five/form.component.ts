import { Component } from 'angular2/core';

@Component({
    selector: 'form-component',
    templateUrl : 'app/section-five/form.component.template.html'
})

export class FormComponent {
    onSubmit(form) {
        console.log(form);
    }
}