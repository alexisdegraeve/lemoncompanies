import { TestBed } from '@angular/core/testing';

import { ItunesmusicService } from './itunesmusic.service';

describe('ItunesmusicService', () => {
  let service: ItunesmusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItunesmusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
