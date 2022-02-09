import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';
/**
 * Componente inicial de carga del Juego del Calamar
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Nombre del jugador
   */
  public name:string='';

  /**
   * Error en el input name
   */
  public eName:boolean= false;

  /**
   * Loading de la app
   */
  public load:Boolean = false;

  /**
   * Constructor
   * 
   * @param _play Servicios del juego
   * @param router Servicios de navegación entre vista y manipulación de la url
   */
  constructor(
    public _play:PlayService,
    public router:Router
    ) { }

  /**
   * Ciclo de vida 
   */
  ngOnInit(): void {

    //Establecemos 1000 milessegundo para simular una carga de la aplicación
    setTimeout(() => {
      this.load = true;
    }, 1000);

  }

  /*
  * Iniciamos el juego 
  */
  public playGame():void{

    try {
      if(this.name) {
        this._play.checkName(this.name);
        this.router.navigate(['play']);
      } else {
        this.eName = true;
        setTimeout(() => {
          this.eName = false;
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }

  }

  
}
