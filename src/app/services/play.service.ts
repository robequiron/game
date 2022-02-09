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
   * Establecemos el nombre del jugardo y lo guardamos en el servicio
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

  
 


}
