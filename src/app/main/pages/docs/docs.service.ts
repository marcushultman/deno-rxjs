import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class DocsService {
    DOCS_PATH = 'content/guide/'

    constructor(private http: HttpClient) {}

    public getConfig(): Observable<any> {
        return new Observable((subscriber) => {
            this.http.get(this.DOCS_PATH + 'guide.json').subscribe({
                next: (data) => {
                    subscriber.next(JSON.parse(JSON.stringify(data)))
                },
                error: (data) => {
                    subscriber.error(data)
                },
                complete: () => {
                    subscriber.complete()
                },
            })
        })
    }

    public loadFile(filename): Observable<any> {
        const headers = new HttpHeaders({
            Accept: 'text/html',
        })

        return this.http.get(this.DOCS_PATH + filename + '.md', {
            headers,
            responseType: 'text',
        })
    }
}
