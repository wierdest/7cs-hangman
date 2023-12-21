import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaskTextPipe } from '../../pipes/mask-text.pipe';

@Component({
  selector: 'app-hidden-text-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
  MaskTextPipe],
  templateUrl: './hidden-text-input.component.html',
  styleUrls: ['./hidden-text-input.component.css']
})
export class HiddenTextInputComponent {
  hide = true;
  value = "";
  originalValue = "";

  onInputChange(event: any) {
    // Use the Elvis operator to handle null case
    this.value = event?.target?.value ?? '';

    const last = this.value[this.value.length - 1];
    this.originalValue += last;
    if(this.value.length > 1) {
      this.value = this.originalValue + last;
    }

  }

  clearValues() {
    this.value = '';
    this.originalValue = '';
  }

  
}
