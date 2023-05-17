import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtabpanelComponent } from './materialtabpanel.component';

describe('MaterialtabpanelComponent', () => {
  let component: MaterialtabpanelComponent;
  let fixture: ComponentFixture<MaterialtabpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialtabpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialtabpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
