import {Component} from 'angular2/core';
import { ZippyComponent } from './zippy/zippy.component';
//import { VoteComponent } from './vote/vote.component';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>

               <!--
               <voter
                [voteCount]="post.voteCount"
                [myVote]="post.myVote"
                (vote)="onVote($event)"
               ></voter>
               -->

               <zippy title="Who can see my stuff?">
                    Content of who can see my stuff.
               </zippy>
               <zippy title="Who can contact me?">
                    Content of who can contact me.
               </zippy>


                `,
    directives: [
        //VoteComponent
        ZippyComponent
    ]
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