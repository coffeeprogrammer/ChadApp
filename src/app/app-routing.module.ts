import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';
import { AddComponent } from './add/add.component'
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full'},           
      { path: 'browse', component: BrowseComponent },
      { path: 'add', component: AddComponent},
      { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BrowseComponent, AddComponent, SettingsComponent];
