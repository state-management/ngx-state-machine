import { StateMachine } from 'simple-state-machine';

export function createStateMachine(): StateMachine {
    return StateMachine.getInstance()
}
