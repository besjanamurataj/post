import { ComponentsModule } from './components/components/components.module';
import { AddBlogModule } from './components/add-blog/add-blog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UsersComponent } from './components/users/users.component';
import { ManagerpostComponent } from './components/managerpost/managerpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [AddBlogModule,ManagerpostComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
