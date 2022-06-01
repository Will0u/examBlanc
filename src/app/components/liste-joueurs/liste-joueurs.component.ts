import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JoueurClass } from 'src/app/models/joueur-class';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {


  playersArray ?: JoueurClass[] = [];
  postesArray = this.serviceJoueur.arrayPoste;
  limit = 23;


  constructor(
    private serviceJoueur : PlayerService,
    private toastr : ToastrService
  ) { }



  ngOnInit(): void {
    let gardArray : JoueurClass[]  = [] ;
    let defAray : JoueurClass[]  = [] ;
    let midArray : JoueurClass[]  = [] ;
    let atqArray : JoueurClass[] = [] ;
    this.serviceJoueur.getPlayerArrays().subscribe(data => {
      data.forEach(player => {
        if (player.poste == "Gardien") {
          gardArray.push(player); 
        } else if ( player.poste == "Défenseur" ) {
          defAray.push(player);
        } else if ( player.poste == "Milieu" ) {
          midArray.push(player);
        } else if ( player.poste == "Attaquant" ) {
          atqArray.push(player);
        }
      });
      this.playersArray = gardArray.concat(defAray).concat(midArray).concat(atqArray);    
    })

    this.serviceJoueur.getPoste();
  }

  test($event : string ) {
    console.log($event);
  }

  delete($event : JoueurClass) {
    console.log($event);
    if ($event.id) {
      this.serviceJoueur.deletePlayer($event.id).subscribe(
        this.toastr.success(`Vous avez supprimé ${$event.nom} ${$event.prenom} !` , "Suppression réussie !")
      );
      this.ngOnInit()
    }
  }
}
