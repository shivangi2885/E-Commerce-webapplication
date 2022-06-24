import { TestBed } from '@angular/core/testing';

import { BookchorFormService } from './bookchor-form.service';

describe('BookchorFormService', () => {
  let service: BookchorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookchorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
