import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private _http: HttpClient){
  this.getPokemon();
}
getPokemon(){
  let grimer = this._http.get('https://pokeapi.co/api/v2/pokemon/88/');
  grimer.subscribe(data => {
    console.log(`This is ${data.name}!`);
    console.log(`His favorite moves are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}!`);
    
    let poison_touch = this._http.get('https://pokeapi.co/api/v2/ability/143/');
    poison_touch.subscribe(data => {
      console.log(`There is ${data.pokemon.length} other pokemon with Poison Touch!`);
      for(var i = 0; i < data.pokemon.length; i++){
        console.log(`${data.pokemon[i].pokemon.name} has Poison Touch`)
      }
    })
  })

}
}
