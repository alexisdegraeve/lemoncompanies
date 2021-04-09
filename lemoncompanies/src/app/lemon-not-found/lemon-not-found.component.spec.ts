import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonNotFoundComponent } from './lemon-not-found.component';

describe('LemonNotFoundComponent', () => {
  let component: LemonNotFoundComponent;
  let fixture: ComponentFixture<LemonNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
