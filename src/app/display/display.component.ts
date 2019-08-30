import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  pokemon: Object = [];
  PosY: string = 0 + 'px';
  PosX: string = 0 + 'px';
  PosY_u: string = 100 + 'px';
  PosX_u: string = 0 + 'px';
  ballExist: boolean = false;
  uncaught: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPokemon()
  }

  getPokemon = () => {
    for (let i = 1; i <= 151; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe(async res => {
        let { id, name, sprites, types } = res
        name = name.substring(0, 1).toUpperCase() + name.substring(1)
        let poke = {
          id,
          name,
          image: sprites.front_default,
          type: types[0].type.name
        }
        this.pokemon = [...this.pokemon, poke].sort((a, b) => a.id - b.id)
      })
    }
  }

  catch(id) {
    this.uncaught = false
    let sucArr = [true, false]
    let random = Math.ceil(Math.random() * 4000)
    let success = Math.floor(Math.random() * 2)
    let result = sucArr[success]

    if (result) {
      window.document.getElementById(id).style.display = 'none'
      this.ballExist = true
      
      setTimeout(() => {
        window.document.getElementById('ball').classList.add('shake')
      }, 500)
      window.document.getElementById('ball').classList.add('ball-shake')
      window.document.getElementById('center-center').style.background = '#FA8072'
      let scroll = window.scrollY
      
      setTimeout(() => {
        window.document.getElementById('center-center').style.background = 'white'
        window.document.getElementById('ball').classList.remove('ball-shake')
        window.document.getElementById('ball').classList.remove('shake')
      }, random)

      this.PosY = window.event.clientY - 50 + scroll + 'px'
      this.PosX = window.event.clientX - 50 + 'px'
      
      //re-route user to the individual pokemon
    } else {
      window.document.getElementById(id).style.display = 'none'
      let scroll = window.scrollY
      this.ballExist = true
      this.PosY = window.event.clientY - 50 + scroll + 'px'
      this.PosX = window.event.clientX - 50 + 'px'
      
      setTimeout(() => {
        window.document.getElementById('ball').classList.add('shake')
      }, 500)

      window.document.getElementById('ball').classList.add('ball-shake')
      window.document.getElementById('center-center').style.background = '#FA8072'
      
      setTimeout(() => {
        window.document.getElementById('center-center').style.background = 'white'
        window.document.getElementById('ball').classList.remove('ball-shake')
        window.document.getElementById('ball').classList.remove('shake')
        this.ballExist = false;
        this.uncaught = true;
      }, random - 300)
      
      setTimeout(()=>{
        this.uncaught = false
        window.document.getElementById(id).style.removeProperty('display')
        window.document.getElementById(id).style.zIndex = '6'
      },random)

      this.PosY_u = window.event.clientY - 80 + scroll + 'px'
      this.PosX_u = window.event.clientX - 50 +  'px'
    }
  }
}


