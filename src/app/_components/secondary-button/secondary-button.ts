import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css',
})
export class SecondaryButton {
  inputIcon = input<string>();
  inputBttn = input<string>();
  disabled = input<boolean>(false);
}
