System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SectionTwoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SectionTwoComponent = (function () {
                function SectionTwoComponent() {
                    this.twoWayBindingExample = 'Example text';
                    this.sectionTitle = "Section Three";
                    this.isActive = false;
                }
                SectionTwoComponent.prototype.onClick = function ($event) {
                    console.log('clicked', $event);
                    $event.stopPropagation();
                };
                SectionTwoComponent.prototype.onDivClick = function () {
                    console.log('on div click');
                };
                SectionTwoComponent = __decorate([
                    core_1.Component({
                        selector: 'section-two',
                        template: "\n        <h3>{{sectionTitle}}</h3>\n        <div (click)=\"onDivClick()\">\n            <button class=\"btn btn-primary\"\n            [class.active]=\"isActive\"\n            [style.backgroundColor]=\"isActive ? 'blue' : 'gold'\"\n            (click)=\"onClick($event)\"\n            >Submit</button>\n        </div>\n\n        <!-- two way binding -->\n        <div>\n            <p>Preview: {{twoWayBindingExample}}</p>\n            <input type=\"text\" [(ngModel)]=\"twoWayBindingExample\">\n            <input type=\"button\" value=\"Erase\" (click)=\"twoWayBindingExample=''\"/>\n        </div>\n        <hr>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionTwoComponent);
                return SectionTwoComponent;
            }());
            exports_1("SectionTwoComponent", SectionTwoComponent);
        }
    }
});
//# sourceMappingURL=section-two.component.js.map