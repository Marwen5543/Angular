import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ResidenceComponent } from './residence/residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

const routes: Routes = [
  {path:"addResidence",component:FormResidenceComponent},
  {path:"home",component:ResidenceComponent},
  {path:"details/:id",component:AppartementComponent},
  {path:"addAppartement",component:FormAppartementComponent},
  {path:"formappartement",component:FormAppartementComponent},
  {path:"updateResidence",component:UpdateResidenceComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
