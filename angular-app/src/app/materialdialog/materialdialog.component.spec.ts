import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdialogComponent } from './materialdialog.component';

describe('MaterialdialogComponent', () => {
  let component: MaterialdialogComponent;
  let fixture: ComponentFixture<MaterialdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
