
import { Component  } from 'angular2/core';
import { RocketService } from './rocket.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
    selector: 'app-rocket',
    template: `
        <h3>Rocket</h3>
        <p>{{title}}</p>

        <button class="btn btn-primary"
            [class.active]='isActive'
            [style.backgroundColor]='isActive ? "blue" : "gray"'>
        Click</button>

        <button (click)="onClick()">Submit</button>

        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit</button>
        </div>

        <div>
            <img src="{{ imageUrl }}" />
            <!--<img [src]="imageUrl" />-->
        </div>

        <div>
            <input type='text' [(ngModel)]='title' autoGrow />
            <input type='button' (click)="title=''" value='clear'/>
        </div>

        <ul>
            <li *ngFor="#rocket of rockets">
                {{rocket}}
            </li>
        </ul>
    `,
    providers: [RocketService],
    directives: [AutoGrowDirective]
})

export class RocketComponent {
    title: string = "List of rockets";

    imageUrl: string = 'http://lorempixel.com/400/200/'

    isActive: boolean = false;

    onClick($event) {
        $event.stopPropagation(); //to stop propagation
        console.log('clicked', $event);
    }

    onDivClick() {
        console.log('handled by div');
    }

    rockets;

    constructor(rocketService: RocketService) {
        this.rockets = rocketService.getRockets();
    }
}