import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { ApplicationRoutingModule } from './application-routing/application-routing.module';
import { RouterModule } from '@angular/router';
import { movieApiInterceptorProvider } from './interceptors/MovieApiInterceptorProvider';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/favorite.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const combineReducers = { favorites: favoriteReducer }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ApplicationRoutingModule,
    StoreModule.forRoot(combineReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode()
    }),
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }