import { Inject, Injectable, Optional } from "@angular/core";
import {
  HttpBackend,
  HttpClient,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HTTP_INTERCEPTORS
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FeatureHttpClient {
  constructor(
    public http: HttpClient,
   
  ) {

  }

  testAPI() {
    return this.http.get('https://63ec9d8f32a08117239e3fe7.mockapi.io/user')
  }

}
