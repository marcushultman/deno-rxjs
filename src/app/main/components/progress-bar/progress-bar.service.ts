import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class ProgressBarService {
    protected progressBarSource = new BehaviorSubject(false)
    progressBar = this.progressBarSource.asObservable()

    constructor() {}

    public show(): void {
        this.progressBarSource.next(true)
    }

    public hide(): void {
        this.progressBarSource.next(false)
    }
}
