import { NgModule } from '@angular/core';
import { StateMachine } from 'simple-state-machine';
import {createStateMachine} from "./factory/state-machine.factory";

@NgModule({
    providers: [
        {
            provide: StateMachine,
            useFactory: createStateMachine,
        },
    ],
})
export class NgxStateMachineModule {}