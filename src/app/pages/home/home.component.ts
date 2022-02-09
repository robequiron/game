import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';
/**
 * Componente inicial de carga
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
  public name:String='';

  /**
   * Loading de la app
   */
  public load:Boolean = false;


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

    this.router.navigate(['play']);

  }

}
