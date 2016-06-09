import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zippy',
    templateUrl: 'app/section-four/zippy.component.template.html',
    styleUrls: ['app/section-four/zippy.component.styles.css']
})

export class ZippyComponent {
    isExpanded: boolean = false;
    @Input() title: string;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}