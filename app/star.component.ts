import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'star',
    templateUrl: '/app/star.template.html',
    styleUrls: ['app/star.styles.css']
})

export class StarComponent {
    @Input() isFavorite: boolean = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}