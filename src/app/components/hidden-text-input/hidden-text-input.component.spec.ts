import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenTextInputComponent } from './hidden-text-input.component';

describe('HiddenTextInputComponent', () => {
  let component: HiddenTextInputComponent;
  let fixture: ComponentFixture<HiddenTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenTextInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
