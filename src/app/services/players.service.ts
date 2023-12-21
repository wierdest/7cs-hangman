import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  private playerListSubject: BehaviorSubject<Player[] | null> = new BehaviorSubject<Player[] | null>(null);

  getPlayerList() : Observable<Player[] | null> {
    return this.playerListSubject.asObservable();
  }

  addPlayer(newPlayer: Player) : void {
    
    const currentPlayers = this.playerListSubject.value || [];
    const updatedPlayers = [...currentPlayers, newPlayer];

    // emit
    this.playerListSubject.next(updatedPlayers);
  }


  constructor() { }
}
