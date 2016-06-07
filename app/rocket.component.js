System.register(['angular2/core', './rocket.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, rocket_service_1, auto_grow_directive_1;
    var RocketComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rocket_service_1_1) {
                rocket_service_1 = rocket_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            RocketComponent = (function () {
                function RocketComponent(rocketService) {
                    this.title = "List of rockets";
                    this.imageUrl = 'http://lorempixel.com/400/200/';
                    this.isActive = false;
                    this.rockets = rocketService.getRockets();
                }
                RocketComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation(); //to stop propagation
                    console.log('clicked', $event);
                };
                RocketComponent.prototype.onDivClick = function () {
                    console.log('handled by div');
                };
                RocketComponent = __decorate([
                    core_1.Component({
                        selector: 'app-rocket',
                        template: "\n        <h3>Rocket</h3>\n        <p>{{title}}</p>\n\n        <button class=\"btn btn-primary\"\n            [class.active]='isActive'\n            [style.backgroundColor]='isActive ? \"blue\" : \"gray\"'>\n        Click</button>\n\n        <button (click)=\"onClick()\">Submit</button>\n\n        <div (click)=\"onDivClick()\">\n            <button (click)=\"onClick($event)\">Submit</button>\n        </div>\n\n        <div>\n            <img src=\"{{ imageUrl }}\" />\n            <!--<img [src]=\"imageUrl\" />-->\n        </div>\n\n        <div>\n            <input type='text' [(ngModel)]='title' autoGrow />\n            <input type='button' (click)=\"title=''\" value='clear'/>\n        </div>\n\n        <ul>\n            <li *ngFor=\"#rocket of rockets\">\n                {{rocket}}\n            </li>\n        </ul>\n    ",
                        providers: [rocket_service_1.RocketService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [rocket_service_1.RocketService])
                ], RocketComponent);
                return RocketComponent;
            }());
            exports_1("RocketComponent", RocketComponent);
        }
    }
});
//# sourceMappingURL=rocket.component.js.map