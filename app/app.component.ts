import {Component} from 'angular2/core';
import { CoursesComponent } from './section-one/courses.component';
import { RocketComponent } from './section-one/rocket.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { FavoriteComponent } from './section-two/favorite.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { LikeComponent } from './section-three/like.component';
import { VoterComponent } from './section-three/voter.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { ZippyComponent } from './section-four/zippy.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { FormComponent } from './section-five/form.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/section-four/section-four.component.template.html',
    template: `<div class="container-fluid">
                <h3>My First Angular 2 App</h3>
                <hr>
               <comp-one></comp-one>
               <rocket-comp></rocket-comp>
               <section-two></section-two>
               <favorite></favorite>
               <section-three [isFavorite]="addToFavorites.isFavorite" (change)="onFavoriteChange($event)"></section-three>
               <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>

               <voter
                [voteCount]="post.voteCount"
                [myVote]="post.myVote"
                (vote)="onVote($event)"></voter>

                <section-four>
                    <div class="heading">This is heading</div>
                    <div class="body">This is body</div>
                    <div class="body">lipsum</div>
                </section-four>

                <zippy title="Who can see my stuff?">
                    Content of who can see my stuff
                </zippy>
                <zippy title="Who can contact?">
                    Content of who can contact
                </zippy>

                <section-five></section-five>

                <form-component></form-component>
                </div>
                `,
    directives: [
        CoursesComponent,
        RocketComponent,
        SectionTwoComponent,
        FavoriteComponent,
        SectionThreeComponent,
        LikeComponent,
        VoterComponent,
        SectionFourComponent,
        ZippyComponent,
        SectionFiveComponent,
        FormComponent
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


    post = {
        voteCount: 10,
        myVote: 0
    };
    onVote($event) {
        console.log($event);
    }



}