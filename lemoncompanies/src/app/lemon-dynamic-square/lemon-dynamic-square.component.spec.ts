import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonDynamicSquareComponent } from './lemon-dynamic-square.component';

describe('LemonDynamicSquareComponent', () => {
  let component: LemonDynamicSquareComponent;
  let fixture: ComponentFixture<LemonDynamicSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonDynamicSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonDynamicSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
