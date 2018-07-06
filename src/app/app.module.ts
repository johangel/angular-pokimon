import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StorageServiceModule } from 'angular-webstorage-service';

import {HttpModule} from '@angular/http'
import {PokemonsService} from './services/pokemons.service';
import {WebStorageService} from './services/web-storage.service';
import { LoaderComponent } from './subcomponentes/loader/loader.component';
import { MovementsListComponent } from './subcomponentes/movements-list/movements-list.component';
import { PokemonShowComponent } from './componentes/pokemon-show/pokemon-show.component';
import { HeaderComponent } from './componentes/header/header.component';
import {IndexComponent} from './componentes/index/index.component';
import { PokemonInfoThumbnailComponent } from './subcomponentes/pokemon-info-thumbnail/pokemon-info-thumbnail.component';

import * as $ from 'jquery';

const rutes: Routes = [
  {path:'', component: IndexComponent},
  {path:'pokemon/:id', component: PokemonShowComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PokemonInfoThumbnailComponent,
    LoaderComponent,
    MovementsListComponent,
    PokemonShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(rutes),
    HttpModule,
    StorageServiceModule
  ],
  providers: [
    PokemonsService,
    WebStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
