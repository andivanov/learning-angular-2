import {Component} from 'angular2/core';
import { CoursesComponent } from './section-one/courses.component';
import { RocketComponent } from './section-one/rocket.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { FavoriteComponent } from './section-two/favorite.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { LikeComponent } from './section-three/like.component';
import { VoterComponent } from './section-three/voter.component';


@Component({
    selector: 'my-app',
    template: `<h3>My First Angular 2 App</h3>
                <hr>
               <comp-one></comp-one>
               <rocket-comp></rocket-comp>
               <section-two></section-two>
               <favorite></favorite>
               <section-three [isFavorite]="addToFavorites.isFavorite" (change)="onFavoriteChange($event)"></section-three>
               <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>

               <voter></voter>
                `,
    directives: [
        CoursesComponent,
        RocketComponent,
        SectionTwoComponent,
        FavoriteComponent,
        SectionThreeComponent,
        LikeComponent,
        VoterComponent
    ]
})

export class AppComponent {

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    addToFavorites = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    // post = {
    //     voteCount: 10,
    //     myVote: 0
    // };

    // onVote($event) {
    //     console.log($event);
    // }

}