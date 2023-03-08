import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private router:Router ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
onReload(){
  //navigate doesn't the which router who are currently are therefore we pass ActivatedRoute which holds metadata of current url
//  this.router.navigate(['servers'],{relativeTo: this.route})
}
}
