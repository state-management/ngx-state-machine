(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@state-management/simple-state-machine')) :
    typeof define === 'function' && define.amd ? define('ngx-state-machine', ['exports', '@angular/core', '@state-management/simple-state-machine'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-state-machine"] = {}, global.ng.core, global.simpleStateMachine));
})(this, (function (exports, core, simpleStateMachine) { 'use strict';

    function createStateMachine() {
        return simpleStateMachine.StateMachine.getInstance();
    }

    var ɵ0 = createStateMachine;
    var NgxStateMachineModule = /** @class */ (function () {
        function NgxStateMachineModule() {
        }
        return NgxStateMachineModule;
    }());
    NgxStateMachineModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [
                        {
                            provide: simpleStateMachine.StateMachine,
                            useFactory: ɵ0,
                        },
                    ],
                },] }
    ];

    function provideStateMachine() {
        return {
            provide: simpleStateMachine.StateMachine,
            useFactory: createStateMachine
        };
    }

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'Command', {
        enumerable: true,
        get: function () { return simpleStateMachine.Command; }
    });
    Object.defineProperty(exports, 'StateKey', {
        enumerable: true,
        get: function () { return simpleStateMachine.StateKey; }
    });
    Object.defineProperty(exports, 'StateMachine', {
        enumerable: true,
        get: function () { return simpleStateMachine.StateMachine; }
    });
    Object.defineProperty(exports, 'UpdateStateCommand', {
        enumerable: true,
        get: function () { return simpleStateMachine.UpdateStateCommand; }
    });
    exports.NgxStateMachineModule = NgxStateMachineModule;
    exports.provideStateMachine = provideStateMachine;
    exports["ɵ0"] = ɵ0;
    exports["ɵa"] = createStateMachine;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-state-machine.umd.js.map
