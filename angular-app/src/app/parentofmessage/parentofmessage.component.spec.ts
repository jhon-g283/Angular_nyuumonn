import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentofmessageComponent } from './parentofmessage.component';

describe('ParentofmessageComponent', () => {
  let component: ParentofmessageComponent;
  let fixture: ComponentFixture<ParentofmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentofmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentofmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
