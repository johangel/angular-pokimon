import { Component, OnInit } from '@angular/core';
import {PokemonsService} from './../../services/pokemons.service';
import {WebStorageService} from './../../services/web-storage.service';
import {PokemonInfoThumbnailComponent} from '../../subcomponentes/pokemon-info-thumbnail/pokemon-info-thumbnail.component';
declare const $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private pokemonService: PokemonsService,
    private Local: WebStorageService
  ) { }

  ListPokemons = []
  pokemonThumbnail = {}
  Loading = false;
  ngOnInit() {
    this.GetAllPokemons()
  }

  GetAllPokemons(){
    if(!(this.Local.GetValue('ListPokemons'))){
      this.pokemonService.getAllPokemon().subscribe(
        respuesta=>{
        this.ListPokemons = respuesta.results
        this.Local.setKey('ListPokemons', this.ListPokemons)
        setTimeout(function(){
          $('#PokemonTable').DataTable();
          }, 1);
      })
    }else{
      this.ListPokemons  = this.Local.GetValue('ListPokemons')
    }
    console.log($('#PokemonTable'))
    setTimeout(function(){
      $('#PokemonTable').DataTable();
      }, 1);


  }

  GetSinglePokemon(url){
    console.log(url)
    this.Loading= true;
    this.pokemonService.GetSinglePokemon(url).subscribe(
      respuesta=>{
        console.log(respuesta)
        this.pokemonThumbnail = respuesta
        this.Loading= false;
      }, error=>{
        this.Loading= false;
        console.log(error)
    }
    )
  }



}
