import { Component } from "@angular/core"

@Component({
    selector: 'app-server',
    templateUrl: "./server.component.html"
})

export class Server{
    name:string  = "hostpot" //type script define variable
    topic = " is not there" 
    inputName:string = ""
    //function passing and accessing by string interpolation

   fun(){
    return this.topic;
   }
   onChange(){
    this.topic = 'Server is created'
   }
   //this code is replaced by ngModel two way binding
//    inputFn(e){
//     this.inputName = e.target.value;
//    }
}