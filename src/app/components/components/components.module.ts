import { UsersComponent } from './../users/users.component';
import { PostDetailsComponent } from './../post-details/post-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../post/post.component';
import { ManagerpostComponent } from '../managerpost/managerpost.component';
@NgModule({
  declarations: [PostComponent,PostDetailsComponent,UsersComponent,ManagerpostComponent],
  imports: [CommonModule, ComponentsRoutingModule, FormsModule],
  exports:[ManagerpostComponent]
})
export class ComponentsModule {}
