import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDockComponent } from './players-dock.component';

describe('PlayersDockComponent', () => {
  let component: PlayersDockComponent;
  let fixture: ComponentFixture<PlayersDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersDockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
