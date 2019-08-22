import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:'',component:DisplayComponent},
  {path:'pokemon',component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
