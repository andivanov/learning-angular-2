import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/vote/vote.component.html',
    styleUrls: ['app/vote/vote.component.css']
})

export class VoteComponent {
    @Input() voteCount: number = 0;
    @Input() myVote: number = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    }
}