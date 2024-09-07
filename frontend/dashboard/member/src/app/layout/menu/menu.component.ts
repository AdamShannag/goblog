import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../layout.service";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {MenuItemComponent} from "../menu-item/menu-item.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, ButtonModule, DividerModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
          {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/profile']},
        ]
      },

      {
        label: 'Pages',
        items: [
          {
            label: 'Blog',
            icon: 'pi pi-fw pi-sparkles',
            routerLink: ['/blog']
          },
        ]
      },
    ];
  }
}
