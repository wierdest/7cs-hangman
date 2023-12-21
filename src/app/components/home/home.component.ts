import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Subject, Subscription, takeUntil } from 'rxjs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatDialog} from '@angular/material/dialog';

import { ScreenSizeService } from '../../services/screen-size.service';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PlayersDockComponent } from '../players-dock/players-dock.component';
import { HangmanComponent } from '../hangman/hangman.component';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
    MatSidenavModule, MatButtonModule, MatIconModule,
    ToolbarComponent, PlayersDockComponent, HangmanComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentScreenSize: string = '';
  private destroyed = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private screenSizeService: ScreenSizeService,
  ) {
    this.screenSizeService.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe(size => {
        this.currentScreenSize = size;
        // Do any additional logic based on the screen size change
        // console.log(this.currentScreenSize);
      });
  }

  ngOnInit() {

  
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
