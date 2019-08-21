import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  pokemon = [];
  caught = [];

  constructor(private http: HttpClient) {
    
    
  }
  
  ngOnInit() {
    this.getPokemon()
    this.handleSort()
  }
  
  
  getPokemon(){
    for(let i = 0; i < 152; i++){
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe(res=>{
        // console.log(res)
        const {id,name,sprites,types} = res
        let poke = {
          id:id,
          name:name,
          image: sprites.front_shiny,
          type:types[0].type.name
        }
        this.pokemon.push(poke)
      })
    }
  }
  
  
  async handleSort(){
    this.pokemon = await this.pokemon.sort((a,b)=> a.id - b.id)
  }

  handleCatch(pokemon){
    console.log(pokemon)
    this.caught.push(pokemon)
  }
}
