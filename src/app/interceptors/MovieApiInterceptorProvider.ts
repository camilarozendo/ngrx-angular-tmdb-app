import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiConfig } from "../config/api";

@Injectable()
class MoviesApiInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            console.log("3. chamou interceptor")
            const customReq = req.clone({
                url: `${apiConfig.BASE_URL}${req.url}`,
                headers: new HttpHeaders({
                    Authorization: `Bearer ${apiConfig.API_KEY}`
                })
            })
            return next.handle(customReq);
        }
}

export const movieApiInterceptorProvider = [
    {provide: HTTP_INTERCEPTORS,
    useClass: MoviesApiInterceptor,
    multi: true},
];