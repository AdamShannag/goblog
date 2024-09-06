import {Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout/layout.component";
import {DasboardComponent} from "./dasboard/dasboard.component";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: DasboardComponent},
    ]
  },
  {path: '**', redirectTo: ''},
];
