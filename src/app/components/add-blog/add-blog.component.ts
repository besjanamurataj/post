import { Post } from './../../models/post';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  addform: FormGroup;
  post: Post[];
  id: string;
  isAddModal: boolean;
  constructor(
    private service: BlogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
  ) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot["id"];
    this.isAddModal =!this.id;
    this.addform = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required],
    });


  }
  onSubmit() {
    if (this.isAddModal) {
      // console.log(this.isAddModal);
       this.createPost();
     }
      else {
       this.updatePost();
     }
  }
  createPost() {
    this.service.create(this.addform.value).subscribe();
     console.log(this.addform.value);

  }
  updatePost() {
    this.service.update(this.id, this.addform.value);
  }

}
