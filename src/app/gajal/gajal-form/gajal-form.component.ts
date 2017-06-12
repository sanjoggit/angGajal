import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {GajalService} from "../gajal.service";
import {Gajal} from "../gajal.model";
import {DataStorageService} from "../../shared/data-storage.service";
import {Response} from "@angular/http";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-gajal-form',
  templateUrl: './gajal-form.component.html',
  styleUrls: ['./gajal-form.component.css']
})
export class GajalFormComponent implements OnInit {
  id: number;
  gajalForm: FormGroup;
  gajal: Gajal;
  posted = '';
  editMode = false;

  constructor(private gajalService: GajalService, private dataStorageService: DataStorageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }

  private initForm(){
    let gajalTitle = '';
    let gajalImage = '';
    let gajalDesc = '';

    /*FOR EDITING*/
    if(this.editMode){
      const gajal = this.gajalService.getGajal(this.id);
      /*console.log(gajal);*/
      gajalTitle = gajal.title;
      gajalImage = gajal.image;
      gajalDesc = gajal.description;
    }

    /*FOR EDITING END*/


    this.gajalForm = new FormGroup({
      'title': new FormControl(gajalTitle, Validators.required),
      'image': new FormControl(gajalImage, Validators.required),
      'description': new FormControl(gajalDesc, Validators.required)
    });
  }

  onSubmit(){
    if(this.editMode){
      this.gajalService.updateGajal(this.id, this.gajalForm.value);
    } else {
      this.gajalService.addGajal(this.gajalForm.value);
    }
    this.dataStorageService.storeGajal()
      .subscribe(
        (response: Response)=>{
          console.log(response);
        }
      );
    this.posted = 'uploaded successfully';
    this.gajalForm.reset();
    //this.dataStorageService.getGajals();
  }
}
