import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {LoaderComponent} from '../loader/loader.component';
import { Router } from '@angular/router';
import {PokemonsService} from '../../services/pokemons.service';
declare var Chart: any
@Component({
  selector: 'app-pokemon-info-thumbnail',
  templateUrl: './pokemon-info-thumbnail.component.html',
  styleUrls: ['./pokemon-info-thumbnail.component.scss']
})
export class PokemonInfoThumbnailComponent implements OnInit, OnChanges {

  constructor(
    private Router:Router,
    private PokemonsService:PokemonsService
  ) { }

   @Input() pokemonThumbnail: object;
   @Input() Loading: boolean;
   CharCanvas;
   _loading = false
   PokemonSpecie = {}
   Loaded = false
   Chart;
  ngOnInit() {
    this.pokemonThumbnail ={
      id:'0',
      height:'0',
      weight:'0',
      abilities:[],
      stats:[],
      types:[],
      species:{},
      sprites:{},
      moves:[]
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    console.log(changes)
    if(changes.Loading.currentValue == true){
      this._loading = true
    }
      try{
        let speciesUrl = changes.pokemonThumbnail.currentValue.species.url
        this.PokemonsService.getPokemonSpecies(speciesUrl).subscribe(
          respuesta=>{
            console.log(respuesta)
            this.SetPokemonSpeciesInfo(respuesta)
            this.PokemonSpecie = respuesta
            this.Loaded = true
            this._loading = false
            this.CreateChart()
          })
        }catch(error){

      }
  }

  goToPokemonView(id){
    this.Router.navigate(['pokemon/' +id])
  }

  SetPokemonSpeciesInfo(pokemonInfo){
    for(var i= 0; i<pokemonInfo['flavor_text_entries'].length;i++){
      if(pokemonInfo['flavor_text_entries'][i].language.name == 'en'){
        pokemonInfo['flavor_text'] = pokemonInfo['flavor_text_entries'][i].flavor_text
        break
      }
    }
  }

  CreateChart(){
    var canvas = <HTMLCanvasElement> document.getElementById('myChart');
    this.CharCanvas = canvas.getContext("2d");
    let stats = []
    let values= []
    for(var i = 0; i<this.pokemonThumbnail['stats'].length;i++){
      stats.push(this.pokemonThumbnail['stats'][i]['stat']['name'])
      values.push(this.pokemonThumbnail['stats'][i]['base_stat'])
    }
    try{
      this.Chart.destroy();
    }catch(error){
      console.log('el canvas no se ha creado');
    }
    this.Chart =  new Chart(this.CharCanvas, {
        type: 'radar',
        data:{
          labels:stats,
            datasets:[ {
            label: "Statistics",
            backgroundColor: 'rgba(51, 122, 183,0.1)',
            borderColor: '#337AB7',
            data: values
          }]
        }
  })
  console.log(this.Chart)
}
}
