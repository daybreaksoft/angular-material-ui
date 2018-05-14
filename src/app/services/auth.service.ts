import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor() { }

    login(username: string, password: string): Observable<boolean> {
        if (username === 'test' && password === 'test') {
            this.isLoggedIn = true;

            return Observable.of(true)
                .delay(1000);
        } else {
            this.isLoggedIn = false;

            return Observable.of(false)
                .delay(1000);
        }
    }

    logout() {
        this.isLoggedIn = true;
    }
}