import { NgModule } from '@angular/core';
import { StateMachine } from 'simple-state-machine';
import { createStateMachine } from "./factory/state-machine.factory";
const ɵ0 = createStateMachine;
export class NgxStateMachineModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXRlLW1hY2hpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9uZ3gtc3RhdGUtbWFjaGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUNBQWlDLENBQUM7V0FNM0Msa0JBQWtCO0FBSTFDLE1BQU0sT0FBTyxxQkFBcUI7OztZQVJqQyxRQUFRLFNBQUM7Z0JBQ04sU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxZQUFZO3dCQUNyQixVQUFVLElBQW9CO3FCQUNqQztpQkFDSjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJ3NpbXBsZS1zdGF0ZS1tYWNoaW5lJztcbmltcG9ydCB7Y3JlYXRlU3RhdGVNYWNoaW5lfSBmcm9tIFwiLi9mYWN0b3J5L3N0YXRlLW1hY2hpbmUuZmFjdG9yeVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBTdGF0ZU1hY2hpbmUsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVTdGF0ZU1hY2hpbmUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3RhdGVNYWNoaW5lTW9kdWxlIHt9XG4iXX0=