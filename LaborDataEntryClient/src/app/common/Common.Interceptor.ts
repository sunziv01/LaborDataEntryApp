import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Token } from "./Common.Security";

@Injectable()
export class MyJwtInterceptor implements HttpInterceptor {
    constructor(private tok: Token) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.tok.value}`
                }
            });
        return next.handle(request);
    }
}
