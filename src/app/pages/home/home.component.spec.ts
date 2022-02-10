import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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
      imports:[FormsModule],
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

  it('Cuando se inicia la aplicación simulamos la carga de la aplicación  mostrando un spinner', 
  ()=>{
    component.load = false;
    
    const elem:HTMLElement = fixture.debugElement.query(By.css('#load')).nativeElement;

    expect(elem.innerHTML).toContain('Loading...');

  })

  it('Simular tiempo de recarga de 1000 milesegundos', fakeAsync(()=>{
    
    component.load = false;

    component.ngOnInit();

    tick(1000);

    fixture.detectChanges();
    
    fixture.whenStable().then( ()=>{
      
      expect(component.load).toBeTruthy();
    })


  }))

  it('Iniciar la partida una vez introducido el nombre ', () =>{

    component.name = 'roberto';

    component.playGame();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['play']);

  });

  it('Iniciar la partida pero no se introduce ningún nombre de usuario', ()=>{

    component.name = "";

    component.playGame();

    expect(component.eName).toBeTruthy();


  });


});
