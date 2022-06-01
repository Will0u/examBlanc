import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurClass } from 'src/app/models/joueur-class';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.css']
})
export class DetailJoueurComponent implements OnInit {


  constructor(
    private serviceJoueur : PlayerService,
    private activatedRoute : ActivatedRoute
  ) { }

  idUrl = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"))

  displayPlayer = new JoueurClass()

  ngOnInit(): void {
    this.serviceJoueur.getPlayerArrays().subscribe(data=>{
      data.forEach(player => {
        if (player.id == this.idUrl) {
          this.displayPlayer = player;
        }
      });
    })
  }

}
