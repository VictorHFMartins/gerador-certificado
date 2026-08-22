import { Component, input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificates',
  imports: [SecondaryButton],
  templateUrl: './item-certificates.html',
  styleUrl: './item-certificates.css',
})
export class Itemcertificates {
  nomeAluno = input.required<string>();
  dataEmissao = input.required<string>();
  id = input.required<string>();

  constructor(private router: Router) {}

  redirectToCertificate() {
    this.router.navigate(['/certificate', this.id()]);
  }
}
