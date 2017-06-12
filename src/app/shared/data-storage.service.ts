import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {GajalService} from "../gajal/gajal.service";
import {Gajal} from "../gajal/gajal.model";
import 'rxjs/Rx';


@Injectable()
export class DataStorageService{
  constructor(private http: Http, private gajalService: GajalService){}

  storeGajal(){
    return this.http.post('https://gajal-bf376.firebaseio.com/gajals.json', this.gajalService.getGajals());
  }

/*  getGajals(){
    this.http.get('https://gajal-bf376.firebaseio.com/gajals.json')
      .subscribe(
        (response: Response)=>{
          const gajals: Gajal[] = response.json();
          this.gajalService.setGajals(gajals);
        }
      );
  }*/

  getGajals(){
    return this.http.get('https://gajal-bf376.firebaseio.com/gajals.json').map(
      (response: Response)=>{
        const data = response.json();
        return data;
      }
    );
  }
}
