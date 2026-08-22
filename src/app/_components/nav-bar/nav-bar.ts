import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}
