import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {PokemonsService} from '../../services/pokemons.service';
declare var  $ :any;
@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.scss']
})
export class MovementsListComponent implements OnChanges, OnInit {

  constructor(
    private PokemonsService:PokemonsService
  ) { }

  @Input() movementList : any;

  ngOnInit(){
    $('.listMoves').niceScroll({
      cursorcolor:'#337AB7'
    }
    );
  }

  SingleMove = {}
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(this.movementList)
    console.log('ocurrio un cambio')
    console.log(changes)
  }

  getSingleMove(url){
    this.PokemonsService.getSingleMove(url).subscribe(
      respuesta=>{
        console.log(respuesta)
        this.SingleMove = respuesta
        this.setEffectForEffectChanges()
      })
  }

  setEffectForEffectChanges(){
    if(this.SingleMove['effect_entries']){
      for(var i = 0; i<this.SingleMove['effect_entries'].length;i++){
        console.log(this.SingleMove['effect_chance'])
        console.log(this.SingleMove['effect_entries'][i]['effect'])
        this.SingleMove['effect_entries'][i]['effect'] = this.SingleMove['effect_entries'][i]['effect'].replace("$effect_chance%",this.SingleMove['effect_chance'])
        console.log(this.SingleMove['effect_entries'][i]['effect'])
      }
    }
  }

}
