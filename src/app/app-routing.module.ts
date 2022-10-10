import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interface } from './interface/interface';

import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { BudgetComponent } from './budget/budget.component';

import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectformComponent } from './project/projectform/projectform.component';

import { ShoppingComponent } from './shopping/shopping.component';
import { StashComponent } from './stash/stash.component';
import { StashformComponent } from './stash/stashform/stashform.component';
import { ShoppingformComponent } from './shopping/shoppingform/shoppingform.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dash', component: DashComponent},
  { path: 'stash', component: StashComponent},
  { path: 'stashform', component: StashformComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'budget', component:BudgetComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'projectform', component: ProjectformComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'shoppingform', component: ShoppingformComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
