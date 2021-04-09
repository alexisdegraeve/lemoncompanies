import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonChangeColorCellComponent } from './lemon-change-color-cell.component';

describe('LemonChangeColorCellComponent', () => {
  let component: LemonChangeColorCellComponent;
  let fixture: ComponentFixture<LemonChangeColorCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonChangeColorCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonChangeColorCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
