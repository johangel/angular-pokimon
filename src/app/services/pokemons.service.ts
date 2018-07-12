import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PokemonsService {

   url ="https://pokeapi.co/api/v2/"

   createAuthorizationHeader(headers: Headers) {
    headers.append('webo', 'pol culo');
  }

  constructor(private http:Http) { }

  getAllPokemon(): any{
    return this.http.get(this.url + 'pokemon/?limit=949')
    .map((response: Response) => response.json())
  }

  getPokemonSprite(){
    return this.http.get('url').map((response: Response) => response.json())
  }

  GetSinglePokemon(urlPokemon){
    return this.http.get(urlPokemon).map((response: Response) => response.json())
  }

  getSingleMove(UrlMove){
    return this.http.get(UrlMove).map((response: Response) => response.json())
  }

  getPokemonSpecies(UrlSpecie){
    return this.http.get(UrlSpecie).map((response: Response) => response.json())
  }


}
