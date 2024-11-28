import { StateMachine } from '@state-management/simple-state-machine';
import { createStateMachine } from "./state-machine.factory";
export declare function provideStateMachine(): {
    provide: typeof StateMachine;
    useFactory: typeof createStateMachine;
};
