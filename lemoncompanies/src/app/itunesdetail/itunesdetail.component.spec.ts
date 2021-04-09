import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesdetailComponent } from './itunesdetail.component';

describe('ItunesdetailComponent', () => {
  let component: ItunesdetailComponent;
  let fixture: ComponentFixture<ItunesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItunesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
