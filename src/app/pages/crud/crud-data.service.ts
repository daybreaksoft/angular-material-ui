import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface GithubIssue {
    items: GithubIssueItem[];
}

export interface GithubIssueItem {
    number: number;
    title: string;
    state: string;
    created_at: Date;
}

@Injectable()
export class CrudDataService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<GithubIssue> {
        let href = 'https://api.github.com/search/issues';
        let requestUrl = `${href}?q=repo:angular/material2`;

        return this.http.get<GithubIssue>(requestUrl);
    }

    delete(issues: GithubIssueItem): Observable<Object> {
        return Observable.of('1')
            .delay(2000);
    }
}