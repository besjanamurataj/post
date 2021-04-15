import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogComponent } from './add-blog.component';
@NgModule({
  declarations: [AddBlogComponent],
  imports: [BrowserModule,CommonModule,ReactiveFormsModule,FormsModule,CommonModule],
  exports: [AddBlogComponent],
})
export class AddBlogModule {}
