import { Component } from 'angular2/core';
import { RocketService } from './rocket.component.service';
import { AutoGrowDirective } from 'app/directives/auto-grow.directive';

@Component({
    selector: 'rocket-comp',
    template: `
        <p>{{title}}</p>
        <input type='text' autoGrow />
        <ul>
            <li *ngFor='#rocket of rockets'>
                {{rocket}}
            </li>
        </ul>
        <hr>
    `,
    providers: [RocketService],
    directives: [AutoGrowDirective]
})

export class RocketComponent {
    title: string = 'This is a test for the section one';

    rockets;
    constructor(rocketService: RocketService) {
        this.rockets = rocketService.getRockets();
    }
}