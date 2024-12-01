# ngx-state-machine

[![npm version](https://badge.fury.io/js/@state-management%2Fngx-state-machine.svg?cacheSeconds=0)](https://www.npmjs.com/package/@state-management/ngx-state-machine)
[![Build Status](https://github.com/state-management/ngx-state-machine/actions/workflows/build.yml/badge.svg)](https://github.com/state-management/ngx-state-machine/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**ngx-state-machine** is an Angular wrapper for the 
[simple-state-machine](https://www.npmjs.com/package/@state-management/simple-state-machine) library. 
It integrates the state machine into Angular applications by making the `StateMachine` injectable as a service.
You can find the complete documentation of the core library, here:
[Simple State Machine Documentation](https://github.com/state-management/simple-state-machine?tab=readme-ov-file#simple-state-machine)


## About This Project

Managing state in Angular applications often involves using complex libraries or relying on services with shared state. 
**ngx-state-machine** simplifies state management by integrating `simple-state-machine` with Angular’s dependency injection system.

This project is part of the **state-management** suite, which includes:
- [simple-state-machine](https://www.npmjs.com/package/@state-management/simple-state-machine): The core state management library.
- [state-machine-react](https://www.npmjs.com/package/@state-management/state-machine-react): The React wrapper for `simple-state-machine`.
- [ngx-state-machine](https://www.npmjs.com/package/@state-management/ngx-state-machine): The Angular wrapper for `simple-state-machine`.

By decoupling state management from UI components, 
**ngx-state-machine** promotes cleaner, more maintainable, and testable Angular code.
Since the state can be modified from within a Command only, this will result in business logic moving out of UI components into command classes.


### Implementation Example
- [Sample Angular project](https://github.com/state-management/angular-example) that you can clone. It is a fully working example with unit tests, showcasing the use of `ngx-state-machine`.


## Features
###### *State management code, that is lot less scary, easy to read, easy to trace, and very easy to change and unit test.*

### **Traceability**:
This **single most important feature** that we wanted to design correctly is traceability of code.
When trying to identify an issue, we should be able to go through the code, and identify the cause, without having to open ten different files.
We should be able to use the IDE's "find references" or even the simple Find (Ctrl + F) feature to quickly identify what `StateKeys` are changed by which `Commands`.

This is invaluable while identifying issues in code.  This also reduces the dependency on debugging tools and time spent in debugging.

***Most importantly*** the state management code looks a lot less scary, it is easy to read, and it is very easy to change and unit test.

### Important Technical Features:
- **State Injection**: Makes `StateMachine` injectable as a singleton service.
- **Command Dispatching**: Allows encapsulating state modification code within Commands.  Dispatch commands to modify global state.  State can only be changed as part of execution of business logic contained in Command class.
- **Observability**: Allow UI components to reactively observe state changes.


## Installation

Install via npm:
```bash
npm install @state-management/ngx-state-machine
```
OR
```bash
yarn add @state-management/ngx-state-machine
```

## Usage
### Adding StateManagement
There are two ways to add the State Management module to your application.

#### Option 1: Add the NgxStateMachineModule to your Angular application:
```typescript
import { NgModule } from '@angular/core';
import { NgxStateMachineModule } from '@state-management/ngx-state-machine';

@NgModule({
  imports: [
    NgxStateMachineModule
  ],
})
export class AppModule {}
```

---

#### Option 2: For standalone components, include it as provider:
```typescript
import { Component } from '@angular/core';
import {provideStateMachine} from '@state-management/ngx-state-machine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxStateMachineModule], 
  // NOTE: you do not need "providers", if you use option 1: Add the NgxStateMachineModule
  providers: [provideStateMachine()],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
    constructor(private stateMachine: StateMachine) {
    }
}
```

### StateKeys.constants.ts
Create a constants file to store all state keys, for easy tracing of state changes in application
```typescript
import {StateKey} from '@state-management/ngx-state-machine';

export class StateKeyConstants {
    // NOTE: the generics, "<number>" of the StateKey defines the data type of the value stored against this key.
    public static readonly COUNTER_KEY = new StateKey<number>('counter');
}
```

### Command class 
Create a Command, to perform application logic, and update the state.
###### Note: Only Command can change the state.
```typescript
import {Command} from '@state-management/ngx-state-machine'
import {StateKeyConstants} from './constants/state-keys.constants';

export interface UpdateCounterParam {changeBy: number}

// NOTE: the generics, "<UpdateCounterParam>" of the Command defines the data type of the parameter of `execute` method.
export class UpdateCounter extends Command<UpdateCounterParam> {
  execute(params:UpdateCounterParam) {
    const currentValue = this.getLatest(StateKeyConstants.COUNTER_KEY) || 0 ;
    // NOTE: only Command can change the state.
    this.putState(StateKeyConstants.COUNTER_KEY, currentValue + params.changeBy);
    
    // Note: Call your service class here, to execute logic, or make API calls.
  }
}
```

### Dispatch the command
Use the injected StateMachine to dispatch Command from UI.  
StateMachine will execute the command, and its logic will change the state.
###### Note: Only Command can change the state.
```typescript
import { Component } from '@angular/core';
import {StateMachine} from '@state-management/ngx-state-machine';
import {UpdateCounter} from '../commands/update-counter.command';

@Component({
  selector: 'app-counter-control',
  standalone: true,
  template: `
  <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
  </div>`,
  styleUrl: './counter-control.component.scss'
})
export class CounterControlComponent {
  constructor(private stateMachine: StateMachine) {
  }

  increment(): void {
    // NOTE: the construtor argument of Command, will be passed as argument to its "execute" method.
    this.stateMachine.dispatch(new UpdateCounter({changeBy: 1}));
  }

  decrement(): void {
    this.stateMachine.dispatch(new UpdateCounter({changeBy: -1}));
  }

}
```

### Listen to state changes
Use the injected StateMachine to observe state changes and render UI accordingly.
```typescript
import {Component} from '@angular/core';
import {StateKeyConstants} from '../constants/state-keys.constants';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {StateMachine} from '@state-management/ngx-state-machine';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <p>counter value is: {{(counter$|async)}}</p> `
})
export class CounterDisplayComponent {
  protected counter$:Observable<number> | undefined;

  constructor(private stateMachine: StateMachine) {
    // Use the injected StateMachine to observe state changes.
    this.counter$ = this.stateMachine.observe(StateKeyConstants.COUNTER_KEY);
  }
  
}
```

## API Documentation

The **ngx-state-machine** is an Angular-specific wrapper for the core library, **simple-state-machine**.
It does not add any new classes or interfaces.  This wrapper allows injecting the StateMachine as a service into Angular components.
You can find the API documentation of the core library, here:
[Simple State Machine Documentation](https://github.com/state-management/simple-state-machine?tab=readme-ov-file#api-documentation)


## Contributing

We welcome contributions! Please open an issue or submit a pull request if you’d like to improve the library.

### How to Contribute
#### 1. Fork the Repository:
Visit the [state-machine-react GitHub repository](https://github.com/state-management/state-machine-react).
Click the "Fork" button to create a copy of the repository under your GitHub account.

#### 2. Clone the Fork:
```bash
git clone https://github.com/state-management/state-machine-react.git
cd state-machine-react
```

#### 3. Create a Feature Branch:
```bash
git checkout -b feature/add-react-wrapper-feature
```   

#### 4. Make Your Changes:
Add or update code, write tests, and ensure the changes are well-documented.
Run Tests Locally, Ensure all existing and new tests pass e:
```bash
npm install
npm test
```

#### 5. Commit and Push Your Changes:
Write a clear and concise commit message:
```bash
git add .
git commit -m "Add new wrapper feature to state-machine-react"
git push origin feature/add-react-wrapper-feature
```

#### 6. Create a Pull Request:
Go to your fork on GitHub and click the “New Pull Request” button.
Provide a description of your changes and any additional context.
