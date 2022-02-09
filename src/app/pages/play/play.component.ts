import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  public lastButton:string="";

  public jugar:boolean= false;

  /**
   * Boton de iniciar
   */
  public btnIniciar:boolean = false;

  /**
   * Perdio
   */
  public lost:boolean = false;

  public intervalo:any;

  public time:number = 5000;



  constructor(
    public _play:PlayService,
    public router: Router
  ) { }

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
    let audio = new Audio("../../../assets/audio/iniciar.mp3");
    audio.play();

    setTimeout(() => {
      //La muñeca de espalda
      this.jugar = true;
      this._play.point = 0;
      //Inicializamos el intervalor
      this.establecerIntervalor();
      if (this.jugar) {
        let audio = new Audio("../../../assets/audio/jugaremos.mp3");
        audio.play();
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
    this.router.navigate(['home']);
  }
  

}
