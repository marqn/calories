/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DateChooserComponent } from './date-chooser.component.ts';

describe('DateChooserComponent', () => {
  let component: DateChooserComponent;
  let fixture: ComponentFixture<DateChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
