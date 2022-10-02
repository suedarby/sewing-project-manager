/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StashformComponent } from './stashform.component';

describe('StashformComponent', () => {
  let component: StashformComponent;
  let fixture: ComponentFixture<StashformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
