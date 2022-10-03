import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { StashComponent } from './stash/stash.component';
import { AuthComponent } from './auth/auth.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProjectComponent } from './project/project.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [							
    AppComponent,
      DashComponent,
      HomeComponent,
      StashComponent,
      AuthComponent,
      ShoppingComponent,
      ProjectComponent,
      BudgetComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
