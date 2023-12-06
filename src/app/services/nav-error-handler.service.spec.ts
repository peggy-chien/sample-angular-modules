import { TestBed } from '@angular/core/testing';

import { NavErrorHandlerService } from './nav-error-handler.service';

describe('NavErrorHandlerService', () => {
  let service: NavErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
