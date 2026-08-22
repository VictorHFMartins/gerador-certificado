import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButton {
  inputBttn = input<string>();
  disabled = input<boolean>(false);
}
