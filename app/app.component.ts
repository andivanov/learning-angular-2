import {Component} from 'angular2/core';
import { VoteComponent } from './vote/vote.component';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>

               <voter
                [voteCount]="post.voteCount"
                [myVote]="post.myVote"
                (vote)="onVote($event)"
               ></voter>
                `,
    directives: [VoteComponent]
})

export class AppComponent {
    post = {
        voteCount: 10,
        myVote: 0
    };

    onVote($event) {
        console.log($event);
    }

}