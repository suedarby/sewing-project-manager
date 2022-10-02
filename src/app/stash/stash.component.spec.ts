/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StashComponent } from './stash.component';

describe('StashComponent', () => {
  let component: StashComponent;
  let fixture: ComponentFixture<StashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
