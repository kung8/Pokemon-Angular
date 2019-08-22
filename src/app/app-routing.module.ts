import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  {path:'',component:DisplayComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'pokemon/:id',component:IndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
