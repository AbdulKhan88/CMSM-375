import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoaderService} from "../shared/loader.service";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  // When your application makes a request,
  // interceptors transform it before sending it to the server
  // and the interceptors can transform the response on its way back before your application sees it

  //the interceptor will change the subject value to true, when a request starts, “hide” it when the request is “finalized”.
  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide())
    );
  }
}
