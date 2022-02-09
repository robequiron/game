import { Component, OnInit } from '@angular/core';
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

  public time:number =4000;



  constructor(
    public _play:PlayService

  ) { }

  ngOnInit(): void {
    this.btnIniciar = true;
  }



  public iniciarPartida() {
    clearInterval(this.intervalo);
    this.btnIniciar = false;
    this.lost = false;
    setTimeout(() => {
      this.jugar = true;
      this.establecerIntervalor();
    }, 3000);  
  }

  public establecerIntervalor() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(()=>{
      this.jugar = !this.jugar
      console.log(this.time)
    },this.time)

  }  
  

  /**
   * 
   * @param f 
   * @returns 
   */
  public jugada(f:string) {
    console.log(this.intervalo)
    if(!this.jugar) {
      this.btnIniciar = true;
      clearInterval(this.intervalo);
    }

    if (f!=this.lastButton) {
      this._play.point++;
      this.lastButton = f;
      if (this._play.point === 10) {
        this.time = 15000;
      }
      return;
    } 
    
    this._play.point--;
    if (this._play.point<0) this._play.setPoint(0);
    
    

  }


  public nuevaPartida(){

  }

}
