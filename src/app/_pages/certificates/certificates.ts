import { Component, OnInit } from '@angular/core';

import { PageHeader } from '../../_components/page-header/page-header';
import { Itemcertificates } from '../../_components/item-certificates/item-certificates';
import { CertificadoService } from '../../_service/certificado-service';
import { CertifyInterface } from '../../_interface/CertifyInterface';
import { RouterLink } from "@angular/router";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";

@Component({
  selector: 'app-certificates',
  imports: [Itemcertificates, PageHeader, RouterLink, SecondaryButton],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class certificates implements OnInit {
  constructor(private certificadoService: CertificadoService) {}

  certificates: CertifyInterface[] = [];

  ngOnInit(): void {
    this.certificates = this.certificadoService.certificados;
  }
}
