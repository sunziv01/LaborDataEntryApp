import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JWTToken } from "./Common.Security";

@Injectable()
export class MyAuthGuard implements CanActivate {


  constructor( private _router: Router ,public _key : JWTToken) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._key.value.length != 0) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/Login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}