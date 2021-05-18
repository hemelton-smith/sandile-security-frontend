import { TestBed } from '@angular/core/testing';

import { SandileSecurityService } from './sandile-security.service';

describe('SandileSecurityService', () => {
  let service: SandileSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandileSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
