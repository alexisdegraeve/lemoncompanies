import { ItunesmusicService } from './../services/itunesmusic.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ItunesdetailComponent } from './itunesdetail.component';

describe('ItunesdetailComponent', () => {
  let component: ItunesdetailComponent;
  let fixture: ComponentFixture<ItunesdetailComponent>;
  let itunesmusicService: ItunesmusicService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItunesdetailComponent ],
      imports: [HttpClientModule],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '278674439'}} //itunes id
          }
        },
        {
          provide: ItunesmusicService
        }
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });





});
