import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Werdegang } from './werdegang';

describe('Werdegang', () => {
  let component: Werdegang;
  let fixture: ComponentFixture<Werdegang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Werdegang]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Werdegang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
