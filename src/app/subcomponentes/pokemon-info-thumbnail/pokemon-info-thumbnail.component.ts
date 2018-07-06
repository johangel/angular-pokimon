import { Component, OnInit, Input } from '@angular/core';
import {LoaderComponent} from '../loader/loader.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-info-thumbnail',
  templateUrl: './pokemon-info-thumbnail.component.html',
  styleUrls: ['./pokemon-info-thumbnail.component.scss']
})
export class PokemonInfoThumbnailComponent implements OnInit {

  constructor(
    private Router:Router
  ) { }

   @Input() pokemonThumbnail: object;
   @Input() Loading: boolean;
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
    this.Loading = false
  }

  goToPokemonView(id){
    this.Router.navigate(['pokemon/' +id])
  }



}
