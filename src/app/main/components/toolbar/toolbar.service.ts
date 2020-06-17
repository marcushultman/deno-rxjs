import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {
    constructor(private http: HttpClient) {}

    public getNavigation(): Observable<any> {
        return new Observable((subscriber) => {
            this.http.get('content/navigation.json').subscribe({
                next: (data) => {
                    subscriber.next(JSON.parse(JSON.stringify(data)));
                },
                error: (data) => {
                    subscriber.error(data);
                },
                complete: () => {
                    subscriber.complete();
                },
            });
        });
    }
}
