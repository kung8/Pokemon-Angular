import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  newPokemon: Object = {};

  constructor(private http: HttpClient,private route: ActivatedRoute) { 

  }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get("id")
    // console.log(param)
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${param}`).subscribe(res=>{
      const {id,name,sprites,height,weight,moves,types} = res
      let caught = {
        id,
        name,
        image:sprites.front_shiny,
        height,
        weight,
        moves:moves[0].move.name,
        type:types[0].type.name

      }
      this.newPokemon = caught
    })
  }

}
