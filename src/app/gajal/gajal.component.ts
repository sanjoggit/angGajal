import {Component, OnInit, OnDestroy} from '@angular/core';
import {Gajal} from "./gajal.model";
import {GajalService} from "./gajal.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-gajal',
  templateUrl: './gajal.component.html',
  styleUrls: ['./gajal.component.css']
})
export class GajalComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  gajals: Gajal[];
  constructor(private gajalService: GajalService) { }

  ngOnInit() {
    this.subscription = this.gajalService.gajalChanged.subscribe(
      (gajals: Gajal[])=>{
        this.gajals = gajals;
      }
    );
    this.gajals = this.gajalService.getGajals();
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
