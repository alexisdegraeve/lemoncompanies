import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonSoftwareDesignComponent } from './lemon-software-design.component';

describe('LemonSoftwareDesignComponent', () => {
  let component: LemonSoftwareDesignComponent;
  let fixture: ComponentFixture<LemonSoftwareDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonSoftwareDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonSoftwareDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
