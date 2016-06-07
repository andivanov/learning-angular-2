import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/zippy/zippy.component.html',
    styleUrls: ['app/zippy/zippy.component.css']
})

export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}