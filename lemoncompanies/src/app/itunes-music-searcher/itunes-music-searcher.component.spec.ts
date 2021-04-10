import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesMusicSearcherComponent } from './itunes-music-searcher.component';

describe('ItunesMusicSearcherComponent', () => {
  let component: ItunesMusicSearcherComponent;
  let fixture: ComponentFixture<ItunesMusicSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItunesMusicSearcherComponent ],
      imports: [HttpClientModule, FormsModule],
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
