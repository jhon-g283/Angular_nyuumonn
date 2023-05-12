import { TestBed } from '@angular/core/testing';

import { MycheckHttpService } from './mycheck-http.service';

describe('MycheckHttpService', () => {
  let service: MycheckHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycheckHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
