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
    private listenObj: any;

    @ViewChild('docs', { static: false }) private docs: MarkdownComponent;

    constructor(
        private matStackBar: MatSnackBar,
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
        this.markdownService.renderer.heading = (
            text: string,
            level: number
        ) => {
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
            let url = segments.join('/');
            // @deprecated
            // this.docsService.getConfig().subscribe({
            // next: (data) => {
            // let documentInfo = data.filter(
            // (item) => item.key === url
            // )[0];
            // @deprecated
            if (url === '') {
                url = 'index';
            }
            // @deprecated
            // if (documentInfo !== undefined) {
            // @deprecated
            this.docsService.loadFile(url).subscribe({
                next: (fileData) => {
                    this.documentData = fileData;
                },
                error: (fileError) => {
                    console.error(fileError);
                    console.error(`RxJS: File "${url}" not found`);
                    this.router.navigate(['/404']);
                },
                complete: () => {
                    this.progressBar.hide();
                },
            });
            // @deprecated
            // } else {
            // console.error(`RxJS: File "${url}" not found`);
            // this.router.navigate(['/404']);
            // }
            // },
            // error: (data) => {
            // console.error(data);
            // ,
            // });
            // @deprecated
        });
    }

    ngAfterViewChecked(): void {
        try {
            if (this.fragment) {
                document
                    .querySelector('#' + this.fragment)
                    .scrollIntoView({ behavior: 'smooth' });
            }
        } catch (e) {}
    }

    ngOnDestroy(): void {
        this.sideBarService.hide();
    }
}
