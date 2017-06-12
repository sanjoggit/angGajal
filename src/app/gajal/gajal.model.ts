import {CommentPost} from "../shared/comment-post.model";

export class Gajal{
  public title: string;
  public image: any;
  public description: string;

  constructor(title: string, image: any, description: string){
    this.title = title;
    this.image = image;
    this.description = description;
  }
}
