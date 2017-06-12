import { Injectable } from '@angular/core';
import {Gajal} from "./gajal.model";
import {Subject} from "rxjs/Subject";
import {CommentPost} from "../shared/comment-post.model";

@Injectable()
export class GajalService {
  date = Date.now();
  constructor() { }
  gajalChanged = new Subject<Gajal[]>();

  private gajals: Gajal[] = [
    new Gajal('Beautiful Landscape', 'https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '),
    new Gajal('Cool Sunset', 'https://static.pexels.com/photos/35599/sunset-field-poppy-sun-priroda.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '),
    new Gajal('Beautiful day', 'https://static.pexels.com/photos/105234/pexels-photo-105234.jpeg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ')

  ];

  getGajals(){
    return this.gajals.slice();
  }

  getGajal(id: number){
    return this.gajals[id];
  }

  addGajal(gajal: Gajal){
    this.gajals.unshift(gajal);
    this.gajalChanged.next(this.gajals.slice());
  }
 /* addFromServer(gajals: Gajal[]){
    this.gajals = gajals;
    this.gajalChanged.next(this.gajals.slice());
  }*/

 setGajals(gajals: Gajal[]){
   this.gajals = gajals;
   this.gajalChanged.next(this.gajals.slice());
 }

  addComment(comment: CommentPost[], id: number){
    this.gajals[id][3].push(comment);
    this.gajalChanged.next(this.gajals.slice());
  }

  deleteGajal(index: number){
    this.gajals.splice(index, 1);
    this.gajalChanged.next(this.gajals.slice());
  }

  updateGajal(index: number, newgajal: Gajal){
    this.gajals[index] = newgajal;
    this.gajalChanged.next(this.gajals.slice());
  }


}
