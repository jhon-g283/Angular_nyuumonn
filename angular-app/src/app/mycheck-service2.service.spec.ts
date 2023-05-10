import { TestBed } from '@angular/core/testing';

import { MycheckService2Service } from './mycheck-service2.service';

describe('MycheckService2Service', () => {
  let service: MycheckService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycheckService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
