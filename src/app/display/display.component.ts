import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../account.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent  implements OnInit{
 @Input() user: {name: string};
@Input() i:number;

  constructor(private account: Account){ }
   ngOnInit(): void { }

  onDelete(id:number){
    this.account.DeleteUser(id)
 }
}
