import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';
import { PlayComponent } from './play.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;
  let playService:PlayService;
  let routerSpy:any;

  

  beforeEach(() => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ PlayComponent ],
      providers: [PlayService, {provide:Router, useValue: routerSpy}],
    })
    .compileComponents();
    playService = TestBed.get(PlayService);

    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creamos el componente', () => {
    expect(component).toBeTruthy();
  });

  


});
