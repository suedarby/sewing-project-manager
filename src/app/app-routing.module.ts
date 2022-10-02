import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { StashComponent } from './stash/stash.component';
import { StashformComponent } from './stash/stashform/stashform.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dash', component: DashComponent},
  { path: 'stash', component: StashComponent},
  { path: 'stashform', component: StashformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
