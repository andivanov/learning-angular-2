//ngIf
System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var SectionFourComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            SectionFourComponent = (function () {
                function SectionFourComponent() {
                    this.sectionTitle = 'Section 4';
                    // ngIf
                    this.courses = [];
                    // ngSwitch
                    this.viewMode = 'map';
                    // ngFor
                    this.books = ['Book One', 'Book Two', 'Book Three'];
                    // Pipes
                    this.lecture = {
                        title: 'Angular2 for Beginners',
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                    // Custom Pipes
                    this.customPipesTitle = "Creating a custom pipe";
                    this.customPipesCopy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, molestias nisi saepe, sapiente architecto ea fuga consectetur quae, quas voluptatum laudantium obcaecati quibusdam nam vel, omnis alias! Sint, minus sit.";
                    // ngClass
                    this.isFavorite = false;
                    // ngStyle - use classes instead, common sence
                    this.buttonText = 'Continue';
                    this.canSave = false;
                    // Elvis Operator
                    this.task = {
                        title: 'List of tasks for today',
                        assignee: {
                            name: 'Andrei'
                        }
                    };
                }
                SectionFourComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                };
                SectionFourComponent = __decorate([
                    core_1.Component({
                        selector: 'section-four',
                        templateUrl: 'app/section-four/section-four.component.template.html',
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionFourComponent);
                return SectionFourComponent;
            }());
            exports_1("SectionFourComponent", SectionFourComponent);
        }
    }
});
//# sourceMappingURL=section-four.component.js.map