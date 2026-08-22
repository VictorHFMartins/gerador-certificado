import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './_components/nav-bar/nav-bar';

import { UiBase } from './_components/ui-base/ui-base';
import { certificates } from './_pages/certificates/certificates';
import { CertificadoService } from './_service/certificado-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, UiBase],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('gerador-certificado');

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
