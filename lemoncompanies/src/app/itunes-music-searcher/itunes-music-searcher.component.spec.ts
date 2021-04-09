import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesMusicSearcherComponent } from './itunes-music-searcher.component';

describe('ItunesMusicSearcherComponent', () => {
  let component: ItunesMusicSearcherComponent;
  let fixture: ComponentFixture<ItunesMusicSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItunesMusicSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesMusicSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
