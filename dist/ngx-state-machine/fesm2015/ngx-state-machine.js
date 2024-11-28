import { NgModule } from '@angular/core';
import { StateMachine } from '@state-management/simple-state-machine';
export { Command, StateKey, StateMachine, UpdateStateCommand } from '@state-management/simple-state-machine';

function createStateMachine() {
    return StateMachine.getInstance();
}

const ɵ0 = createStateMachine;
class NgxStateMachineModule {
}
NgxStateMachineModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: StateMachine,
                        useFactory: ɵ0,
                    },
                ],
            },] }
];

function provideStateMachine() {
    return {
        provide: StateMachine,
        useFactory: createStateMachine
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { NgxStateMachineModule, provideStateMachine, ɵ0, createStateMachine as ɵa };
//# sourceMappingURL=ngx-state-machine.js.map
