import { Component } from 'angular2/core';
import { CourseService } from './courses.component.service';

@Component({
    selector: 'comp-one',
    template: `
        <p>{{title}}</p>
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
        <hr>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
    title: string = 'Content of the first section';
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}