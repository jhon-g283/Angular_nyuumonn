import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hellow2Component } from './hellow2.component';

describe('Hellow2Component', () => {
  let component: Hellow2Component;
  let fixture: ComponentFixture<Hellow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hellow2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hellow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
