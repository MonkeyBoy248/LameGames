import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlatformsPageComponent } from './game-platforms-page.component';

describe('GamePlatformsPageComponent', () => {
  let component: GamePlatformsPageComponent;
  let fixture: ComponentFixture<GamePlatformsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlatformsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlatformsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
