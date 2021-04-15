import {
  Component,
  OnInit
} from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { AddBlogComponent } from 'src/app/components/add-blog/add-blog.component';
import { BlogService } from 'src/app/services/blog.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-managerpost',
  templateUrl: './managerpost.component.html',
  styleUrls: ['./managerpost.component.css'],
})
export class ManagerpostComponent implements OnInit {
  posts = null;
  constructor(
    private service: BlogService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.service.get().subscribe(posts => this.posts =posts);
  }
  deletePost(id: string) {

     const blog = this.posts.find((x) => x.id === id);
     console.log(id);
     blog.isDeleting = true;
      this.service
        .delete(id)
        .subscribe(() => {
      this.posts = this.posts.filter((x) => x.id !== id);

        });

  }


  trackByFn(_index, blog) {
    return blog.id;
  }
  openModal() {
    this.modalService.open(AddBlogComponent);
  }
  openConfirm(){
    this.modalService.open(ConfirmationComponent)
  }
}
