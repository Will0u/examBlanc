import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoueurClass } from 'src/app/models/joueur-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = environment.apiUrl;
  arrayPoste : string[] = [] ;

  constructor(
    private http : HttpClient
  ) { }



  getPlayerArrays() : Observable<JoueurClass[]> {
    return this.http.get<JoueurClass[]>(this.apiUrl);
  }

  addPlayer(player : JoueurClass) : Observable<JoueurClass> {
    return this.http.post<JoueurClass>(this.apiUrl,player)
  }

  getPoste(){
    this.getPlayerArrays().subscribe(data=>{
      data.forEach(player => {
        if (player.poste) {
          if (!this.arrayPoste.includes(player.poste)) {
            this.arrayPoste.push(player.poste)
          }
        }       
      });
    })
  }

  deletePlayer (id : number) : any {
    return this.http.delete(this.apiUrl+"/"+id)
  }

}
