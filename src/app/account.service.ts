import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Account {
  user = [{ name: 'lency' }, { name: 'me' },{name: "were"}];

  addUsers(name: string){
    this.user.push({name: name})    
  }
  DeleteUser(id:number){
    this.user.splice(id,1)
  }
}

