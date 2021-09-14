import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppModule } from './app.module';

describe('AppRountingModule', () => {
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, RouterTestingModule.withRoutes(routes)]
        });

        router = TestBed.inject(Router) as Router;
        location = TestBed.inject(Location) as Location;
    });

    it(
        'automatically redirects to home when the app starts',
        fakeAsync(() => {
            router.navigate(['']);
            tick();
            expect(location.path()).toBe('/');
        })
    );
});
