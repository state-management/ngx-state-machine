import { StateMachine } from '@state-management/simple-state-machine';

export function createStateMachine(): StateMachine {
    return StateMachine.getInstance()
}
