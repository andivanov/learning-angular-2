
import { Component, Input } from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like/like.component.html',
    styleUrls: ['app/like/like.component.css']
})

export class LikeComponent {
    @Input() totalLikes: number = 0;
    @Input() iLike: boolean = false;

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }

}