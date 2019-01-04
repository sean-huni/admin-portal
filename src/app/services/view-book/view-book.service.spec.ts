import { TestBed } from '@angular/core/testing';

import { ViewBookService } from './view-book.service';

describe('ViewBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewBookService = TestBed.get(ViewBookService);
    expect(service).toBeTruthy();
  });
});
