import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseserviceComponent } from './useservice.component';

describe('UseserviceComponent', () => {
  let component: UseserviceComponent;
  let fixture: ComponentFixture<UseserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
