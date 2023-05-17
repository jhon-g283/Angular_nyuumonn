import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialbottomsheetComponent } from './materialbottomsheet.component';

describe('MaterialbottomsheetComponent', () => {
  let component: MaterialbottomsheetComponent;
  let fixture: ComponentFixture<MaterialbottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialbottomsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialbottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
