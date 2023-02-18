import { Component } from "@angular/core"

@Component({
    selector: 'app-server',
    templateUrl: "./server.component.html",
    styles:[`
    .flag{
        border: 2px solid gray;
    }
    `]
})

export class Server{
    name:string  = "hostpot" //type script define variable
    topic = " is not there" 
    inputName:string = ""
    flag:boolean = false;

    servers = [];

    //function passing and accessing by string interpolation

   fun(){
    return this.topic;
   }
   onChange(){

    this.servers.push(this.inputName);
    this.topic = 'Server is created'
    this.flag = true;
   }
   getColor(){
    return this.flag === false?'pink':'lightblue';
   }
   //this code is replaced by ngModel two way binding
//    inputFn(e){
//     this.inputName = e.target.value;
//    }
}