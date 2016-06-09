//ngIf

import { Component } from 'angular2/core';
import { SummaryPipe } from './summary.pipe';

@Component({
    selector: 'section-four',
    templateUrl: 'app/section-four/section-four.component.template.html',
    pipes: [SummaryPipe]
})

export class SectionFourComponent {
    sectionTitle: string = 'Section 4';

    // ngIf
    courses: string[] = [];

    // ngSwitch
    viewMode = 'map';

    // ngFor
    books: string[] = [ 'Book One', 'Book Two', 'Book Three' ];

    // Pipes
    lecture = {
        title: 'Angular2 for Beginners',
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    };

    // Custom Pipes
    customPipesTitle: string = "Creating a custom pipe";
    customPipesCopy: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, molestias nisi saepe, sapiente architecto ea fuga consectetur quae, quas voluptatum laudantium obcaecati quibusdam nam vel, omnis alias! Sint, minus sit."

    // ngClass
    isFavorite = false;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }

    // ngStyle - use classes instead, common sence
    buttonText: string = 'Continue';
    canSave: boolean = false;

    // Elvis Operator
    task = {
        title: 'List of tasks for today',
        assignee: {
            name: 'Andrei'
        }
    }

    // ngContent see app.component.ts

}