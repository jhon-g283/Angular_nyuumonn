import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirepepleComponent } from './firepeple.component';

describe('FirepepleComponent', () => {
  let component: FirepepleComponent;
  let fixture: ComponentFixture<FirepepleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirepepleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirepepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
