import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  pokemon: Object = [];
  PosY: string = 0 + 'px';
  PosX: string = 0 + 'px';
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getPokemon()
  }

  getPokemon =()=> {
    for (let i = 1; i <=151; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe(async res => {
        let { id, name, sprites, types } = res
        name = name.substring(0,1).toUpperCase() + name.substring(1)
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

  catch(id){
    // console.log('hit',window.scrollY)
    let scroll = window.scrollY
    this.PosY = window.event.clientY - 50 + scroll + 'px' 
    this.PosX = window.event.clientX - 50 +'px'
    // console.log(this.PosY)
    // console.log(this.PosX)
    // window.document.getElementById('pokemon').setAttribute('router'+'Link','/pokemon/{{poke.id}}')
    // console.log(window.document.getElementById('pokemon'))
    window.document.getElementById(id).style.display = 'none'
    // let found = window.document.getElementsByClassName('bounce')
    // console.log(found)
    // 
    // found[0]
    // let route = window.document.getElementById('pokemon').getAttribute('[routerLink]')
    // console.log(route)
    // return RouterLink('/pokemon/{{poke.id && poke.id}}')
    //Figure out how to get the point on where the card is to send the pokeball
    //set a timeout so that the ball appears up that area
    //re-route user to the individual pokemon
  }
}
