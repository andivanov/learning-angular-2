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
                    return ['Ikarus1', 'Souz', 'Nostromo'];
                };
                return RocketService;
            }());
            exports_1("RocketService", RocketService);
        }
    }
});
//# sourceMappingURL=rocket.service.js.map