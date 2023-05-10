import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellorouteComponent } from './helloroute.component';

describe('HellorouteComponent', () => {
  let component: HellorouteComponent;
  let fixture: ComponentFixture<HellorouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellorouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellorouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
