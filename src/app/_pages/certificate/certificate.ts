import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_service/certificado-service';
import { CertifyInterface } from '../../_interface/CertifyInterface';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate implements OnInit {
  id: string | null = null;
  certificado: CertifyInterface | undefined;
  certificates: CertifyInterface[] = [];

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.certificates = this.certificadoService.certificados;
    this.route.paramMap.subscribe((r) => {
      this.id = r.get('id');
      this.certificado = this.certificadoService.certificados.find((c) => c.id === this.id);
    });
  }

  downloadCertificate() {
    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      if (this.certificado == undefined) {
        return;
      }
      link.download = 'certificado_' + this.certificado.nome.replaceAll(' ', '_') + '.png';
      link.click();
    });
  }
}
