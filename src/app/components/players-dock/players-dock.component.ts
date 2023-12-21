import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlayerComponent } from '../player/player.component';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Player } from '../../models/player.model';
import { PlayersService } from '../../services/players.service';
import { StartGameDialogComponent } from '../start-game-dialog/start-game-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-players-dock',
  standalone: true,
  imports: [ 
    CommonModule, MatGridListModule, PlayerComponent, MatIconModule, MatButtonModule
  ],
  templateUrl: './players-dock.component.html',
  styleUrl: './players-dock.component.css'
})
export class PlayersDockComponent {
  tiles: any[] = [];
  tilesData: Player[] | null = null;
  playerDataSubscription!: Subscription;


  private grid = {
    wide: { cols: 1, rows: 2 },
    narrow: { cols: 2 , rows: 2 },
    tooNarrow: { cols: 8, rows: 2 }
  }

  private setUpGridList() {
    if(this.tilesData != null) {

    }

  }
  private buildGridList(dataList: any[], size: string): any[] {
    return dataList.map(data => {
      return { data, ...this.getGridConfigSize(size), flipped: false, flipDirection: "forward", placeholder: false, dragging: false };
    });
  }
 
  private getGridConfigSize(size: string) : any {
    if(size === 'wide') {
      return this.grid.wide;
    } else if (size === 'narrow') {
      return this.grid.narrow;
    } else {
      return this.grid.tooNarrow;
    }
  }

  private WIDE: any[] = [];

  private NARROW: any[] = [];

  private TOO_NARROW: any[] = [];


  currentScreenSize: string = '';
  private destroyed = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private playerService: PlayersService,
    private screenSizeService: ScreenSizeService) {
    this.screenSizeService.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe(size => {
        this.currentScreenSize = size;
        // Do any additional logic based on the screen size change

        if(this.tilesData) {
          this.grid = {
            wide: {
              cols: 1,
              rows: 2
            },
            narrow: {
              cols: 2,
              rows: 2
            },
            tooNarrow: {
              cols: this.tilesData.length,
              rows: 2
            }
          }

          if(this.currentScreenSize === 'XSmall') {
            this.tiles = this.TOO_NARROW;
          
          } else if (this.currentScreenSize === 'Small') {
            this.tiles = this.NARROW;
         
          } else {
            this.tiles = this.WIDE;
          }

        }
       
      });
  }

  ngOnInit() {
    
    this.playerDataSubscription = this.playerService.getPlayerList().subscribe(
      (data) => {
        if(data != null) {
          this.tilesData = data;


          this.grid = {
            wide: {
              cols: 1,
              rows: 2
            },
            narrow: {
              cols: 2,
              rows: 2
            },
            tooNarrow: {
              cols: this.tilesData.length,
              rows: 2
            }
          }

          this.WIDE = this.buildGridList(this.tilesData, 'wide');

          this.NARROW = this.buildGridList(this.tilesData, 'narrow');
        
          this.TOO_NARROW = this.buildGridList(this.tilesData, 'tooNarrow');

          if(this.currentScreenSize === 'XSmall') {
            this.tiles = this.TOO_NARROW;
          
          } else if (this.currentScreenSize === 'Small') {
            this.tiles = this.NARROW;
         
          } else {
            this.tiles = this.WIDE;
          }
        

        }
      }
    )
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  flipCard(index: number): void {
   
  
    this.tiles = this.tiles.map((t, i) => ({
      ...t,
      flipped: i === index ? !t.flipped : t.flipped,
      flipDirection: i === index ? (!t.flipped ? 'forward' : 'backward') : t.flipDirection,
    }));
  }

  openStartDialog() {
    const dialogRef = this.dialog.open(StartGameDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
