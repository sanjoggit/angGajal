import {Routes, RouterModule} from "@angular/router";
import {GajalComponent} from "./gajal/gajal.component";
import {NgModule} from "@angular/core";
import {GajalFormComponent} from "./gajal/gajal-form/gajal-form.component";
import {GajalDetailComponent} from "./gajal/gajal-detail/gajal-detail.component";


const appRoutes: Routes =[
  {path: '', redirectTo: '/gajal', pathMatch: 'full'},
  {path: 'gajal', component: GajalComponent, children: [
    {path: ':id', component: GajalDetailComponent},
    {path: ':id/edit', component: GajalFormComponent}
  ]},
  {path: 'admin', component:GajalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
