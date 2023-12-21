import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGameDialogComponent } from './load-game-dialog.component';

describe('LoadGameDialogComponent', () => {
  let component: LoadGameDialogComponent;
  let fixture: ComponentFixture<LoadGameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadGameDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadGameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
