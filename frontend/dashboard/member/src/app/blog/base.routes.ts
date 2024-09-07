import {Routes} from '@angular/router';
import {BaseComponent} from "./base/base.component";
import {ListComponent} from "./list/list.component";
import {BlogComponent} from "./blog/blog.component";

export const routes: Routes = [
  {
    path: '', component: BaseComponent, children: [
      {path: '', component: ListComponent},
      {path: ':id', component: BlogComponent},
    ]
  },
];
