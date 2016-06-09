import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'section-three',
    template: `
        <i class="glyphicon"
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="onClick()"
        ></i>
        <hr>
    `
})

export class SectionThreeComponent {
    @Input() isFavorite: boolean = false;
    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
        console.log();
    }
}