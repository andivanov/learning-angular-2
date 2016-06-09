import { Component } from 'angular2/core';

@Component({
    selector: 'section-two',
    template: `
        <h3>{{sectionTitle}}</h3>
        <div (click)="onDivClick()">
            <button class="btn btn-primary"
            [class.active]="isActive"
            [style.backgroundColor]="isActive ? 'blue' : 'gold'"
            (click)="onClick($event)"
            >Submit</button>
        </div>

        <!-- two way binding -->
        <div>
            <p>Preview: {{twoWayBindingExample}}</p>
            <input type="text" [(ngModel)]="twoWayBindingExample">
            <input type="button" value="Erase" (click)="twoWayBindingExample=''"/>
        </div>
        <hr>
    `
})

export class SectionTwoComponent {
    twoWayBindingExample: string = 'Example text';
    sectionTitle: string = "Section Three";
    isActive: boolean = false;

    onClick($event) {
        console.log('clicked', $event);
        $event.stopPropagation();
    }

    onDivClick() {
        console.log('on div click');
    }
}