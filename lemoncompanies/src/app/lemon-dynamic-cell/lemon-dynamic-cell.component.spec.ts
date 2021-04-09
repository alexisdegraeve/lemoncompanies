import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonDynamicCellComponent } from './lemon-dynamic-cell.component';

describe('LemonDynamicCellComponent', () => {
  let component: LemonDynamicCellComponent;
  let fixture: ComponentFixture<LemonDynamicCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonDynamicCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonDynamicCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
