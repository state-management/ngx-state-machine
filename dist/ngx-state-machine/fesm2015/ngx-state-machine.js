import { NgModule } from '@angular/core';
import { StateMachine } from 'simple-state-machine';
export { Command, StateKey, StateMachine } from 'simple-state-machine';

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
