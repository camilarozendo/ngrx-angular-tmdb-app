import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { ApplicationRoutingModule } from './application-routing/application-routing.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/MovieApiInterceptorProvider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    RouterModule,
    HttpClientModule,
    ApplicationRoutingModule
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
