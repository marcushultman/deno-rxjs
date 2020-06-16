import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewChecked,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocsService } from './docs.service';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { ProgressBarService } from '../../components/progress-bar/progress-bar.service';
import { MarkdownComponent } from 'ngx-markdown';
import { SidebarService } from '../../services/sidebar.service';
import { UseMarkdownService } from '@use-angular/markdown';

@Component({
  selector: 'docs-component',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit, OnDestroy, AfterViewChecked {
  documentData = '';
  fragment = '';

  @ViewChild('docs', { static: false }) private docs: MarkdownComponent;

  constructor(
    private docsService: DocsService,
    private progressBar: ProgressBarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sideBarService: SidebarService,
    private markdownService: UseMarkdownService
  ) {}

  ngOnInit(): void {
    this.sideBarService.show();
    this.sideBarService.toggleSidebar(true);
    this.progressBar.show();
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${level}>
               <a id="${escapedText}" routerLink="." class="anchor" routerLink=".">
                 <span class="header-link">${text}</span>
               </a>
             </h${level}>`;
    };
    this.activatedRoute.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
    this.activatedRoute.url.subscribe((segments: UrlSegment[]) => {
      const url = segments.join('/');
      this.docsService.getConfig().subscribe({
        next: (data) => {
          let documentInfo = data.filter((item) => item.key === url)[0];
          if (url === '') {
            documentInfo = {
              key: 'index',
              nome: 'Index',
            };
          }
          if (documentInfo !== undefined) {
            this.docsService.loadFile(documentInfo.key).subscribe({
              next: (fileData) => {
                this.documentData = fileData;
              },
              error: (fileError) => {
                console.error(fileError);
              },
              complete: () => {
                this.progressBar.hide();
              },
            });
          } else {
            console.error(`RxJS: File "${url}" not found`);
            this.router.navigate(['/404']);
          }
        },
        error: (data) => {
          console.error(data);
        },
      });
    });
  }

  ngAfterViewChecked(): void {
    if (this.fragment) {
      window.scrollTo({
        top:
          document.querySelector('#' + this.fragment).getBoundingClientRect()
            .top - 64,
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy(): void {
    this.sideBarService.hide();
  }
}
