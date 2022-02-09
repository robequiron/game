import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let playService: PlayService;
  let routerSpy:any;

  
  beforeEach(() => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [PlayService, {provide:Router, useValue: routerSpy}],
    })
    .compileComponents();
    playService = TestBed.get(PlayService);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creamos el componente', () => {
    expect(component).toBeTruthy();
  });
});
