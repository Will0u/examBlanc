import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { DetailJoueurComponent } from './components/detail-joueur/detail-joueur.component';
import { ListeJoueursComponent } from './components/liste-joueurs/liste-joueurs.component';

const routes: Routes = [
  {path:"" , component:AccueilComponent},
  {path:"liste_joueurs" , component:ListeJoueursComponent},
  {path:"liste_joueurs/ajtJoueur" , component:AddJoueurComponent},
  {path:"liste_joueurs/:id" , component:DetailJoueurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
