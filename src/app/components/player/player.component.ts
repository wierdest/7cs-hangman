  import { Component, EventEmitter, Input, Output } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatCardModule } from '@angular/material/card'
  import { MatInputModule } from '@angular/material/input'
  import { MatIconModule } from '@angular/material/icon';
  import { MatButtonModule } from '@angular/material/button';
  import { CommonModule } from '@angular/common';
  import { Player } from '../../models/player.model';
  import { NoIfZeroPipe } from '../../pipes/no-if-zero.pipe';
  import { HiddenTextInputComponent } from '../hidden-text-input/hidden-text-input.component';
  import { PlayersService } from '../../services/players.service';

  @Component({
    selector: 'app-player',
    standalone: true,
    imports: [
      CommonModule, FormsModule, ReactiveFormsModule, MatDividerModule, MatButtonModule, 
      MatCardModule, MatInputModule, MatIconModule, NoIfZeroPipe, HiddenTextInputComponent
    ],
    templateUrl: './player.component.html',
    styleUrl: './player.component.css'
  })
  export class PlayerComponent {
    value = 'Clear me';
    isGameOn: boolean = false;
    @Input() playerData: Player | null = null;
    @Output() flipCard: EventEmitter<boolean> = new EventEmitter<boolean>();

    clickFlip() {
      this.flipCard.emit(true);
    }
    
  }
