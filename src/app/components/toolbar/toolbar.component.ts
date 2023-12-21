import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScreenSizeService } from '../../services/screen-size.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadGameDialogComponent } from '../load-game-dialog/load-game-dialog.component';
import { StartGameDialogComponent } from '../start-game-dialog/start-game-dialog.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule, RouterModule,
    MatIconModule, MatButtonModule, 
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnDestroy {
  toolbarLongSentence = "Seven seas ~ Community ~ Hangman!"
  toolbarShortSentence = "Seven seas: hangman!"

  currentScreenSize: string = '';
  private destroyed = new Subject<void>();

  @Output() drawerToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private dialog: MatDialog,
    private screenSizeService: ScreenSizeService) {
    this.screenSizeService.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe(size => {
        this.currentScreenSize = size;
        // Do any additional logic based on the screen size change
        // console.log(this.currentScreenSize);
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onDrawerToggleClick() {
    // Emit an event to notify the parent component to toggle the drawer
    this.drawerToggle.emit(true);
  }

  openLoadDialog() {
    const dialogRef = this.dialog.open(LoadGameDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
