import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  newPokemon: Object = {};
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSpecificPokemon()
  }

  getSpecificPokemon(){
    const random = Math.floor(Math.random() * 152)
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${random}`).subscribe(res=>{
      const {id,name,sprites,height,weight,moves,types} = res
      let caught = {
        id,
        name,
        image:sprites.front_default,
        height,
        weight,
        moves:moves[0].move.name,
        type:types[0].type.name

      }
      this.newPokemon = caught
    })
  }

}
