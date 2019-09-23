import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export class LoginGuard implements CanActivate {
    canActivate() {
        let loggedIn: boolean = Math.random() < 0.5;

        if(!loggedIn) {
            console.log('not loged in');
        }
        else {
            console.log('log in.....');
        }
        return loggedIn;
    } 
}