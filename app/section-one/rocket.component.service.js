System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RocketService;
    return {
        setters:[],
        execute: function() {
            RocketService = (function () {
                function RocketService() {
                }
                RocketService.prototype.getRockets = function () {
                    return ['Rocket One', 'Rocket Two', 'Rocket Three'];
                };
                return RocketService;
            }());
            exports_1("RocketService", RocketService);
        }
    }
});
//# sourceMappingURL=rocket.component.service.js.map