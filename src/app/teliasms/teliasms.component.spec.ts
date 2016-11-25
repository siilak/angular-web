import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { TeliasmsComponent } from './teliasms.component';

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
      TeliasmsComponent
    ]
  }));

  it('should log ngOnInit', inject([TeliasmsComponent], (telia: TeliasmsComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    telia.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
