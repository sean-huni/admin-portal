import { TestBed } from '@angular/core/testing';

import { UploadImgService } from './upload-img.service';

describe('UploadImgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadImgService = TestBed.get(UploadImgService);
    expect(service).toBeTruthy();
  });
});
