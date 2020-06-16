import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { SidebarService } from '../../services/sidebar.service'

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition(
                'expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ]),
        trigger('enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(
                    '200ms',
                    style({ transform: 'translateX(0)', opacity: 1 })
                ),
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate(
                    '200ms',
                    style({ transform: 'translateX(100%)', opacity: 0 })
                ),
            ]),
        ]),
    ],
})
export class MenuItemComponent implements OnInit {
    expanded: boolean
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded
    @Input() item: NavItem
    @Input() depth: number

    constructor(public router: Router, private sideBarService: SidebarService) {
        if (this.depth === undefined) {
            this.depth = 0
        }
    }

    ngOnInit() {}

    onItemSelected(item: NavItem) {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.url])
            this.sideBarService.toggleSidebar()
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded
        }
    }
}

export interface NavItem {
    title: string
    url: string
    children?: NavItem[]
}
