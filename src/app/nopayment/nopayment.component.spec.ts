import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { NopaymentComponent } from './nopayment.component';

describe('About', () => {
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
      NopaymentComponent
    ]
  }));

  it('should log ngOnInit', inject([NopaymentComponent], (nopayment: NopaymentComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    nopayment.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
