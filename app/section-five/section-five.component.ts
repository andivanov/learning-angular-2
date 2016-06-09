import { Component } from 'angular2/core';

@Component({
    selector: 'section-five',
    templateUrl: `app/section-five/section-five.component.template.html`,
    styleUrls: [ 'app/section-five/section-five.component.styles.css' ]
})

export class SectionFiveComponent {
    onSubmit(form) {
        console.log(form);
    }
}