import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLoading: boolean;

    constructor(private router: Router) {
        this.isLoading = true;
    }

    ngOnInit(): void {
        this.routerEvents();
    }

    routerEvents() {
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof NavigationStart:
                    this.isLoading = true;
                    break;

                case event instanceof NavigationEnd:
                    this.isLoading = false;
                    break;
            }
        })
    }
}