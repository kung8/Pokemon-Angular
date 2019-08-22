import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  pokemon: Object = [];
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getPokemon()
  }

  getPokemon =()=> {
    for (let i = 1; i <=151; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe(async res => {
        const { id, name, sprites, types } = res
        let poke = {
          id,
          name,
          image: sprites.front_default,
          type: types[0].type.name
        }
        this.pokemon = [...this.pokemon,poke].sort((a,b)=> a.id - b.id)
      })
    }
  }
}
