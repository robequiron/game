import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
/**
 * Servicios 
 */
@Injectable({
  providedIn: 'root'
})
export class PlayService {
  /**
   * Número máximo de punto que tiene el jugar
   */
  public max:number=0;

  /**
   * Nombre del jugador
   */
  public name:string="";

  /**
   * Puntos del jugador
   */
  public point:number=0;



  constructor() { }


  /**
   * Establecemos los datos para las siguientes partidas
   */
  public getGame() {

  }

  /**
   * Establecemos el nombre del jugador
   */

  /**
   * Establecemos el nombre del jugado y lo guardamos en el servicio
   * @param name Nombre del jugardor
   */
  public setName(name:string):void {

    this.name = name;
    localStorage.setItem('name', name);

  }

  /**
   * Anotamos los punto obtenidos 
   * @param n Punto obtenidos
   */
  public setPoint(n:number):void {

    this.point = n;

  }

  public setMaxPoint(n:number):void {
    
    this.max = n;

    localStorage.setItem('max',n.toString());

  }

  /**
   * Retornamos true o false si el usuario está creado en la 
   * variable localStorege
   * 
   * @returns Retornamos booleand
   */
  public localName():boolean {

    if (localStorage.getItem('name')) {
      this.max = Number(localStorage.getItem('max'));
      this.name = localStorage.getItem('name') || '';
      return true;
    } else {
      return false;
    }
  }

  /**
   * Comprobamos el usuario si es el mismo o es uno nuevo. Si es el mismo de carga
   * los datos del localStorage y retornado verd
   * @param name Nombre del usuario a comprobar
   */
  public checkName(name:string):void {
    
    if (localStorage.getItem('name')===name) {
        this.max = Number(localStorage.getItem('max')) || 0;
    } else {
        this.max = 0;
        this.setName(name);
        this.setMaxPoint(this.max);
    }

  }

 

  
 


}
