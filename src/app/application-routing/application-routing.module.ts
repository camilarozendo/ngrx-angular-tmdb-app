import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from '../movies/movie-details/movie-details.component';
import { CustomPreloadingModuleService } from '../config/CustomPreloadingModuleService';
import { HomeComponent } from '../pages/home/home.component';
import { CustomMoviesResolver } from '../movies/resolvers/CustomMoviesResolver';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: HomeComponent,
                },
                {
                    path: 'popular-movies',
                    loadChildren: () =>
                        import(
                            /* webpackChunkName: "movies" */ '../movies/movies.module'
                        ).then((m) => m.MoviesModule),
                    resolve: {
                        popularMovies: () => inject(CustomMoviesResolver).getPopularMovies(),
                    },
                    data: {
                        preload: true,
                    },
                },
                {
                    path: 'movie/:id',
                    component: MovieDetailsComponent,
                },
                {
                    path: 'favorite-movies',
                    loadChildren: () =>
                        import(
                            /* webpackChunkName: "favorite-movies" */ '../favorites/favorites.module'
                        ).then((m) => m.FavoritesModule),
                    data: {
                        preload: false,
                    },
                },
            ],
            { preloadingStrategy: CustomPreloadingModuleService }
        ),
    ],
})
export class ApplicationRoutingModule {}