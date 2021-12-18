import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//import { BrowseComponent } from './browse/browse.component';
//import { AddComponent } from './add/add.component';
//import { SettingsComponent } from './settings/settings.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
//    BrowseComponent,
 //   AddComponent,
 //   SettingsComponent,
    routingComponents,
MovieTileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
