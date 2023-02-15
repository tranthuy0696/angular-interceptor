import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(public http: HttpClient) {}
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // method != POST, size of payload < n kb
    if (httpRequest.url.match(/^.*\d+$/)) {
      return next.handle(httpRequest);
    } else {
        
        // 18kb [8kb, 8kb, 2kb] => dwp-middle, compass,
      // proxy /middle/api POST
      console.log(JSON.stringify(httpRequest.body));
      httpRequest = httpRequest.clone({
        url: `https://63ec9d8f32a08117239e3fe7.mockapi.io/user`,
        method: 'POST',
        body: {
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/700.jpg',
          createdAt: '2023-02-15T05:41:46.196Z',
          id: '100',
          name: 'THUY',
        },
      });
    for (let i = 1; i < 3; i++) {
        this.http
        .get(`https://63ec9d8f32a08117239e3fe7.mockapi.io/user/${i}`)
        .subscribe();
    }
      return next.handle(httpRequest);
    }

  }
}
