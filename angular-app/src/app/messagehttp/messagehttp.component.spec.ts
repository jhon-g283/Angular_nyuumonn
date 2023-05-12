import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagehttpComponent } from './messagehttp.component';

describe('MessagehttpComponent', () => {
  let component: MessagehttpComponent;
  let fixture: ComponentFixture<MessagehttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagehttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
