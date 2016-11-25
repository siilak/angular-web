import { Component } from '@angular/core';

console.log('`Telia` component loaded asynchronously');

@Component({
  selector: 'telia',
  templateUrl: "telia.component.html"
})

export class TeliaComponent {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello');
    }

}
