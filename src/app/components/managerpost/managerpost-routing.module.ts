import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerpostComponent } from './managerpost.component';

const routes: Routes = [
  {
    path:'', component:ManagerpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerpostRoutingModule { }
