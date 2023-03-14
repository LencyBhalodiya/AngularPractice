import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  id = 0;
  name = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  //only loads the data when componenet gets reload 
    this.name = this.route.snapshot.params['name'];
    //this tells browser to update my data if url gets change 
    this.route.params.subscribe((data:Params)=>{
      
      this.id = data['id'];
      this.name = data['name'];
    })
  }
}
