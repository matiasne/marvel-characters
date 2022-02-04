import { TestBed } from '@angular/core/testing';

import { MarvelHeroesApiService } from './marvel-heroes-api.service';

describe('MarvelHeroesApiService', () => {
  let service: MarvelHeroesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelHeroesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
