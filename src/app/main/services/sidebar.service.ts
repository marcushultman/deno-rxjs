import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, ɵConsole } from '@angular/core';

@Injectable()
export class SidebarService {
  protected sidebarSource = new BehaviorSubject(false);
  sidebar = this.sidebarSource.asObservable();
  
  protected toggleSource = new BehaviorSubject(false);
  lastToggleValue = false;
  toggleValue = false;
  toggle = this.toggleSource.asObservable();

  constructor() {}

  public show(): void {
    this.sidebarSource.next(true);
  }

  public hide(): void {
    this.sidebarSource.next(false);
  }

  public toggleSidebar(value?: true | false): void {
    const toggleValue = ((typeof value !== 'undefined') ? value : !this.toggleValue);
    if (this.toggleValue !== toggleValue) {
      this.toggleValue = toggleValue;
      this.toggleSource.next(this.toggleValue);
    }
  }
}
