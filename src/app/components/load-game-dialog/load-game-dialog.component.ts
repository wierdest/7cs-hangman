import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-load-game-dialog',
  standalone: true,
  imports: [
    MatDialogModule, MatButtonModule
  ],
  templateUrl: './load-game-dialog.component.html',
  styleUrl: './load-game-dialog.component.css'
})
export class LoadGameDialogComponent {

}
