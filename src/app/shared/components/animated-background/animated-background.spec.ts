import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBackground } from './animated-background';

describe('AnimatedBackground', () => {
  let component: AnimatedBackground;
  let fixture: ComponentFixture<AnimatedBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimatedBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
