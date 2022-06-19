import { TestBed } from '@angular/core/testing';

import { GamePlatformsService } from './game-platforms.service';

describe('GamePlatformsService', () => {
  let service: GamePlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePlatformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
