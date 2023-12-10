import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsComponent } from './Shared/errors/errors.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    FormResidenceComponent,
    AppartementComponent,
    FormAppartementComponent,
    NotFoundComponent,
    ErrorsComponent,
    UpdateResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
