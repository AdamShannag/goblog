import {Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout/layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BaseComponent} from "./blog/base/base.component";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: DashboardComponent},
      {
        path: 'blog',
        component: BaseComponent,
        loadChildren: () => import('./blog/base.routes').then((m) => m.routes),
      },
    ]
  },
  {path: '**', redirectTo: ''},
];
