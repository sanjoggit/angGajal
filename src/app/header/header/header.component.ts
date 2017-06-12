import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {Gajal} from "../../gajal/gajal.model";
import {GajalService} from "../../gajal/gajal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private gajalService: GajalService) { }

  ngOnInit() {
  }

  onGet(){
    this.dataStorageService.getGajals().subscribe(
      (gajals: Gajal[])=>{
        console.log(gajals);
      }
    );
  }

}
