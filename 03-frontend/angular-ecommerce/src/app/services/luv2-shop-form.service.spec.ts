import { TestBed } from '@angular/core/testing';

import { bookchorFormService } from './luv2-shop-form.service';

describe('bookchorFormService', () => {
  let service: bookchorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(bookchorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
