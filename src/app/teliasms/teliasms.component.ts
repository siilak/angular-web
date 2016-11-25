import { Component } from '@angular/core';

console.log('`Telia` component loaded asynchronously');

@Component({
  selector: 'telia',
  templateUrl: "teliasms.component.html"
})

export class TeliasmsComponent {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello');
    }

}
