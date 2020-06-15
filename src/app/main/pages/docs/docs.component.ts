import { Component, Input, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocsService } from './docs.service';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { ProgressBarService } from '../../components/progress-bar/progress-bar.service';
import { MarkdownComponent } from 'ngx-markdown';
import { SidebarService } from '../../services/sidebar.service';


@Component({
  selector: 'docs-component',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit, OnDestroy {

  documentData = '';
  private listenObj: any;

  @ViewChild('docs', {static: false}) private docs: MarkdownComponent;

  constructor(
    private matStackBar: MatSnackBar,
    private docsService: DocsService,
    private progressBar: ProgressBarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sideBarService: SidebarService
  ) {
  }

  ngOnInit(): void {
    this.sideBarService.show();
    this.sideBarService.toggleSidebar(true);
    this.progressBar.show();
    this.activatedRoute.url.subscribe((segments: UrlSegment[]) => {
        const url = segments.join('/');
        this.docsService.getConfig().subscribe({
            next: (data) => {
              let documentInfo = data.filter(item => item.key === url)[0];
              if (url === '') {
                documentInfo = {
                    key: 'index',
                    nome: 'Index'
                };
              }
              if (documentInfo !== undefined) {
                this.docsService.loadFile(documentInfo.key).subscribe({
                    next: (fileData) => {
                        this.documentData = fileData;
                    },
                    error: (fileError) => {
                        console.log(fileError);
                    },
                    complete: () => {
                        this.progressBar.hide();
                    }
                });
              } else {
                console.error(`RxJS: File "${url}" not found`);
                this.router.navigate(['/404']);
              }
            },
            error: (data) => {
              console.error(data);
            }
          });
    });
  }

  ngOnDestroy(): void {
      this.sideBarService.hide();
      this.sideBarService.toggleSidebar(false);
  }
}
