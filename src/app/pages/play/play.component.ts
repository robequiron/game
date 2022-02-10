import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';
/**
 * Componente donde se realiza el juego
 */
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  /**
   * Varible que contiene el valor último del click de las pisadas.
   */
  public lastButton:string="";

  /**
   * Cuando es Falso la muñeca está de frente y pierdes. Verdadero puedes caminar, sin morir.
   */
  public jugar:boolean= false;

  /**
   * Boton de iniciar
   */
  public btnIniciar:boolean = false;

  /**
   * Perdio
   */
  public lost:boolean = false;

  /**
   * Ruta audio iniciar
   */
  public audioIniciar = new Audio("../../../assets/audio/iniciar.mp3");
  /**
   * Ruta audio jugaremos
   */
  public audioJugaremos = new Audio("../../../assets/audio/jugaremos.mp3");


  /**
   * Variable para el intervalo de tiempo
   */
  public intervalo:any;

  /**
   * Tiempo del intervalo
   */
  public time:number = 5000;

  /** 
   * Variable para salir de la página con tiempo de apagar los intervalos
  */
  public exit = false;

  /**
   * Constructor
   * 
   * @param _play Servicios del juego
   * @param router Servicios de navegación entre vista y manipulación de la url
   */
  constructor(
    public _play:PlayService,
    public router: Router
  ) { }


  /**
   * Ciclo de vida
   */
  ngOnInit(): void {
    //Comprobamos que el usuario ha entrado anteriormente. Si no existe en el localStore no desplazamos a la ruta home
   if (!this._play.localName()) this.router.navigate(['home']);
   this.btnIniciar = true;
  }


  /**
   * Iniciamos la partida
   */
  public iniciarPartida() {
    //Paramos el intervalor
    clearInterval(this.intervalo);
    
    //Ocultamos el boton iniciar nueva partida
    this.btnIniciar = false;

    //Establecemos que el jugador no ha perdido
    this.lost = false;

    //Iniciamos el audio
    
    this.audioIniciar.play();

    setTimeout(() => {
      //La muñeca de espalda
      this.jugar = true;
      this._play.point = 0;
      //Inicializamos el intervalor
      this.establecerIntervalor();
      if (this.jugar) {
        this.audioJugaremos.play();
      }
    }, 4000);  
  }


  /**
   * Iniciamos el intervalo
   */
  public establecerIntervalor() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(()=>{
      //Si el jugador a perdido paramos el intervalo
      if (this.lost) {
        clearInterval(this.intervalo);
      }
      //Mostramos o ocultamos la muñeca
      this.jugar = !this.jugar

      //Iniciamos el audio
      if (this.jugar) {
        let audio = new Audio("../../../assets/audio/jugaremos.mp3");
        audio.play();
      }
      if (!this.jugar && !this.lost) {
        let audio = new Audio("../../../assets/audio/escaner.mp3");
        audio.play();
      }
      console.log(this.time)
      
    },this.time)

  }  
  

  /**
   * Metodo para realizar jugar
   * 
   * @param f Botón derecho o izquierdo
   * @returns Null break metodo
   */
  public jugada(f:string) {
    
    this.sound(f);

    if(!this.jugar) {
      if (!this.jugar && !this.lost) {
        let audio = new Audio("../../../assets/audio/perdistes.mp3");
        audio.play();
      }

      this.lost = true;
      this.btnIniciar = true;
      this.lastButton = "";
      this._play.setMaxPoint(this._play.point);
      clearInterval(this.intervalo);
    }

    if (f!=this.lastButton) {
      this._play.point++;
      this.lastButton = f;
      if (this._play.point%20===0) {
        clearInterval(this.intervalo);
        this.time = Math.max(10000-this._play.point * 100, 4000) + Math.round(Math.random()*1000)
        this.establecerIntervalor();
      }
      return;
    } 
    
    this._play.point--;
    if (this._play.point<0) this._play.setPoint(0);

  }

  /**
   * Sonido de los pasos
   * 
   * @param f Paso derecho o izquida
   */
  private sound(f:string):void{
    
    let audio;
    if (f==='l') {
      audio = new Audio("../../../assets/audio/left.mp3");
      audio.play();
    } else {
      audio = new Audio("../../../assets/audio/left.mp3");
      audio.play();
    }
    
    if (audio) audio.play();
    
  }

  /**
   * Retornamos a la pagina de inicio
   */
  public rInicio():void{
    this.exit = true;
    setTimeout(() => {
      this.router.navigate(['home']);
      this.audioIniciar.pause();
      this.audioJugaremos.pause();
      //Paramos el intervalor
      clearInterval(this.intervalo);
    }, 4500);
  }
  
  /**
   * Destruimos el intervalor una vez destruida  el componente
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
   
    setTimeout(() => {
      clearInterval(this.intervalo);
    }, 4500);
  }

}
