import { Component, Input } from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl : 'app/section-three/like.component.template.html' ,
    styleUrls: ['app/section-three/like.component.css']
})

export class LikeComponent {
    @Input() totalLikes: number = 0;
    @Input() iLike: boolean = false;

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}