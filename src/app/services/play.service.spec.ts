import { TestBed } from '@angular/core/testing';

import { PlayService } from './play.service';

describe('PlayService', () => {
  let service: PlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayService);
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });

  it('Configuramos el nombre como variable en el servicio y creamos la variable en el LocalStorage', ()=>{

    const n:string = 'nombre';

    service.setName(n);
    
    expect(service.name).toBe(n);
    expect(localStorage.getItem('name')).toBe(n);

  })

  it('Retornamos falso, si no existe nombre en la variable name en el localStorage', ()=>{

    localStorage.removeItem('name');

    const res = service.localName();

    expect(res).toBeFalsy();

  });

  it('Retornamos verdadero, si existe el nombre en la variable localStorage', ()=>{

    localStorage.setItem('name', 'roberto');

    const res = service.localName();

    expect(res).toBeTruthy();

  }); 

});
