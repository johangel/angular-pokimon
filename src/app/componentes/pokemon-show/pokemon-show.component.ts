import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PokemonInfoThumbnailComponent} from '../../subcomponentes/pokemon-info-thumbnail/pokemon-info-thumbnail.component'

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.scss']
})
export class PokemonShowComponent implements OnInit {

  constructor(
    private ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.ActivatedRoute.snapshot.params.id)
  }

}
