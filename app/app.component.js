System.register(['angular2/core', './section-one/courses.component', './section-one/rocket.component', './section-two/section-two.component', './section-two/favorite.component', './section-three/section-three.component', './section-three/like.component', './section-three/voter.component', './section-four/section-four.component', './section-four/zippy.component', './section-five/section-five.component', './section-five/form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, rocket_component_1, section_two_component_1, favorite_component_1, section_three_component_1, like_component_1, voter_component_1, section_four_component_1, zippy_component_1, section_five_component_1, form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (rocket_component_1_1) {
                rocket_component_1 = rocket_component_1_1;
            },
            function (section_two_component_1_1) {
                section_two_component_1 = section_two_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (section_three_component_1_1) {
                section_three_component_1 = section_three_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (section_four_component_1_1) {
                section_four_component_1 = section_four_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (section_five_component_1_1) {
                section_five_component_1 = section_five_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.addToFavorites = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.post = {
                        voteCount: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/section-four/section-four.component.template.html',
                        template: "<div class=\"container-fluid\">\n                <h3>My First Angular 2 App</h3>\n                <hr>\n               <comp-one></comp-one>\n               <rocket-comp></rocket-comp>\n               <section-two></section-two>\n               <favorite></favorite>\n               <section-three [isFavorite]=\"addToFavorites.isFavorite\" (change)=\"onFavoriteChange($event)\"></section-three>\n               <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\n               <voter\n                [voteCount]=\"post.voteCount\"\n                [myVote]=\"post.myVote\"\n                (vote)=\"onVote($event)\"></voter>\n\n                <section-four>\n                    <div class=\"heading\">This is heading</div>\n                    <div class=\"body\">This is body</div>\n                    <div class=\"body\">lipsum</div>\n                </section-four>\n\n                <zippy title=\"Who can see my stuff?\">\n                    Content of who can see my stuff\n                </zippy>\n                <zippy title=\"Who can contact?\">\n                    Content of who can contact\n                </zippy>\n\n                <section-five></section-five>\n\n                <form-component></form-component>\n                </div>\n                ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            rocket_component_1.RocketComponent,
                            section_two_component_1.SectionTwoComponent,
                            favorite_component_1.FavoriteComponent,
                            section_three_component_1.SectionThreeComponent,
                            like_component_1.LikeComponent,
                            voter_component_1.VoterComponent,
                            section_four_component_1.SectionFourComponent,
                            zippy_component_1.ZippyComponent,
                            section_five_component_1.SectionFiveComponent,
                            form_component_1.FormComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map