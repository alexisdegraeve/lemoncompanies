import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonWelcomeComponent } from './lemon-welcome.component';

describe('LemonWelcomeComponent', () => {
  let component: LemonWelcomeComponent;
  let fixture: ComponentFixture<LemonWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
