import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { GajalComponent } from './gajal/gajal.component';
import {GajalService} from "./gajal/gajal.service";
import { GajalFormComponent } from './gajal/gajal-form/gajal-form.component';
import {AppRoutingModule} from "./app-routing.module";
import { GajalDetailComponent } from './gajal/gajal-detail/gajal-detail.component';
import { GajalEditComponent } from './gajal/gajal-edit/gajal-edit.component';
import { GajalItemComponent } from './gajal/gajal-item/gajal-item.component';
import {DataStorageService} from "./shared/data-storage.service";
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GajalComponent,
    GajalFormComponent,
    GajalDetailComponent,
    GajalEditComponent,
    GajalItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GajalService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
