import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/section-three/voter.component.template.html',
    styleUrls: ['app/section-three/voter.component.css']
})

export class VoterComponent {
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