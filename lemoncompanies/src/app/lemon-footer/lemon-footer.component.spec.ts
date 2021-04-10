import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonFooterComponent } from './lemon-footer.component';

describe('LemonFooterComponent', () => {
  let component: LemonFooterComponent;
  let fixture: ComponentFixture<LemonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
