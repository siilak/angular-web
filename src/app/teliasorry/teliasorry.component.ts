import { Component } from '@angular/core';

console.log('`Telia` component loaded asynchronously');

@Component({
  selector: 'telia',
  templateUrl: "teliasorry.component.html"
})

export class TeliasorryComponent {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello');
    }

}
