
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { ManagerpostComponent } from './components/managerpost/managerpost.component';
const routes: Routes = [
  {
    path: 'post',
    loadChildren: () =>
      import('./components/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  // {
  //   path: 'manager',
  //   loadChildren: () =>
  //     import('./components/managerpost/managerpost.module').then(
  //       (m) => m.ManagerpostModule
  //     ),
  // },
  { path:'add', component: AddBlogComponent },
  { path:'edit/:id', component: AddBlogComponent },
  {path:'manager',component:ManagerpostComponent},
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
