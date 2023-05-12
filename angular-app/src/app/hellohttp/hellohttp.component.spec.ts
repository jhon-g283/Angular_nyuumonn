import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellohttpComponent } from './hellohttp.component';

describe('HellohttpComponent', () => {
  let component: HellohttpComponent;
  let fixture: ComponentFixture<HellohttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellohttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellohttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
