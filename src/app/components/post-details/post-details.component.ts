import { Post } from './../../models/post';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post :Post;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {}

details(){
}

}
