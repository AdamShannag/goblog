import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LayoutService} from "../layout.service";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {
  }
}
