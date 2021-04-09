import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonNavbarComponent } from './lemon-navbar.component';

describe('LemonNavbarComponent', () => {
  let component: LemonNavbarComponent;
  let fixture: ComponentFixture<LemonNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
