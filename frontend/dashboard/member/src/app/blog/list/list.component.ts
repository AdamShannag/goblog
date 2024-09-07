import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToolbarModule} from "primeng/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    Button,
    SplitButtonModule,
    ToggleButtonModule,
    ToolbarModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(private router: Router) {
  }

  createNew() {
    this.router.navigate(['/blog/new'])
  }
}
