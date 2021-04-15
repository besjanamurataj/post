import { BlogService } from 'src/app/services/blog.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$: any;
  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    return this.service.getUsers().subscribe((data) => {
      this.users$ = data;
    });
  }
}
