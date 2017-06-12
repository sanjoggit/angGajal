import {Component, OnInit, ViewChild} from '@angular/core';
import {GajalService} from "../gajal.service";
import {Gajal} from "../gajal.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CommentPost} from "../../shared/comment-post.model";

@Component({
  selector: 'app-gajal-detail',
  templateUrl: './gajal-detail.component.html',
  styleUrls: ['./gajal-detail.component.css']
})
export class GajalDetailComponent implements OnInit {
  @ViewChild('f') commentForm: NgForm;
  gajal: Gajal;
  id: number;
  comment: CommentPost[];
  constructor(private gajalService: GajalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.gajal = this.gajalService.getGajal(this.id);
      }
    );

  }

  onSubmit(){
    this.comment = this.commentForm.value.comment;
    console.log(this.comment);
    this.gajalService.addComment(this.comment, this.id);
  }

  deleteGajal(){
    this.gajalService.deleteGajal(this.id);
    this.router.navigate(['/gajal']);
  }

  onEditGajal(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
