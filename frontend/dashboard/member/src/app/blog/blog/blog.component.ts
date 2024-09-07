import {Component} from '@angular/core';
import {EditorComponent} from "../../components/editor/editor.component";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {MenuItem} from "primeng/api";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToggleButtonChangeEvent, ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    EditorComponent,
    ToolbarModule,
    Button,
    SplitButtonModule,
    ToggleButtonModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  items: MenuItem[] | undefined;
  editor: boolean = false;

  isExisting = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.isExisting) {
      this.items = [
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ];
    } else {
      this.items = [
        {
          label: 'Publish',
          icon: 'pi pi-send'
        },
      ];
    }

  }

  enableEditor($event: ToggleButtonChangeEvent) {
    this.editor = $event.checked!;
  }

  goBack() {
    this.router.navigate(['/blog'])
  }
}
