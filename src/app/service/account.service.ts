export class AuthService {
    isLogged = false;

    login(){
        this.isLogged = true;
    }
    logout(){
        this.isLogged = false;
    }
    isAuthenticated(){
        return this.isLogged;
    }
}