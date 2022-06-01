import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JoueurClass } from 'src/app/models/joueur-class';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {


  constructor(
    private serviceJoueur : PlayerService,
    private toastr : ToastrService,
    private router : Router
  ) { }


  poste = ["Attaquant","Défenseur","Gardien","Milieu"];
  newJoueur = new JoueurClass();

  ngOnInit(): void {
  }
  
  submit() {
    this.serviceJoueur.addPlayer(this.newJoueur).subscribe(data =>{
      this.toastr.success(`Ajout de ${this.newJoueur.nom} ${this.newJoueur.prenom}, retour vers la liste dans quelques secondes ...`, "Ajout réussi !")
      setTimeout(() => {
        this.router.navigate(["/liste_joueurs"])
      }, 500);
    })
  }

  
}
