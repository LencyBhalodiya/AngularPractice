import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
   number:number = 0; 
   interval
   @Output() intervalFired = new EventEmitter<number>();
   StartGame(){
    
   this.interval =  setInterval(()=>{
    this.intervalFired.emit(this.number+1);
      this.number  = this.number+1
     },1000)

   }
   EndGame(){    
    clearInterval(this.interval);
   }
}
