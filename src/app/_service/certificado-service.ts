import { Injectable } from '@angular/core';
import { CertifyInterface } from '../_interface/CertifyInterface';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: CertifyInterface[] = [];

  constructor() {}

  adicionarCertificado(certificado: CertifyInterface) {
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
