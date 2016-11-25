import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { TeliaComponent } from './telia.component';

describe('Telia', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      TeliaComponent
    ]
  }));

  it('should log ngOnInit', inject([TeliaComponent], (telia: TeliaComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    telia.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
