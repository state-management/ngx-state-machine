import { StateMachine } from '@state-management/simple-state-machine';
import {createStateMachine} from "./state-machine.factory";

export function provideStateMachine() {
    return {
        provide: StateMachine,
        useFactory: createStateMachine
    };
}
