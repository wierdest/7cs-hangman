import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs'
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayersService } from '../../services/players.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-start-game-dialog',
  standalone: true,
 
  imports: [ CommonModule, MatTabsModule, MatFormFieldModule, FormsModule, MatInputModule,
    MatDialogModule, MatButtonModule, MatButtonToggleModule, ReactiveFormsModule, MatSliderModule,
  ],
  templateUrl: './start-game-dialog.component.html',
  styleUrl: './start-game-dialog.component.css'
})
export class StartGameDialogComponent {
  gameModeControl = new FormControl('single');
  singleModeControl = new FormControl('ask');
  numberOfPlayersControl = new FormControl(2);
  singlePlayerNameControl = new FormControl('Single Player')
  playerNameControls: FormControl[] = [
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
  ]

  constructor(private playersService: PlayersService) {}

  clickStart() {
    if(this.gameModeControl.value === 'multi') {
      const numberOfPlayers = this.numberOfPlayersControl.value;
      if(numberOfPlayers) {
        for(let i = 0; i < numberOfPlayers; i++) {

          let name = this.playerNameControls[i].value;
          if(name == "" || name == undefined) {
            name = "Player " + i;
          }
          this.playersService.addPlayer(
            {
              name: name,
              points: 0,
              word: '',
              guesses: [],
            }
          )
        }

        
      }
      console.log('player number: ', numberOfPlayers)
    } else {
      let name = this.singlePlayerNameControl.value;
      if(name == null) {
        name = "Single Player"
      }
      this.playersService.addPlayer(
        {
          name: name,
          points: 0,
          word: '',
          guesses: [],
        }
      )
    }
    
  }
  formatLabel(value: number): string {
    this.numberOfPlayersControl.setValue(value);
    return `${value}`;
  }
  setArrayFromNumber(i: number | null) {
    if(i === null) {
      return new Array(0);
    }
    return new Array(i);
  }


}
