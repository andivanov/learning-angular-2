import { Component } from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
        <i class="glyphicon"
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="onClick()"
        ></i>
        <hr>
    `
})

export class FavoriteComponent {
    isFavorite: boolean = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
        console.log();
    }
}