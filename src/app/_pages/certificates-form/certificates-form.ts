import { Component, ViewChild } from '@angular/core';
import { PageHeader } from '../../_components/page-header/page-header';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { ItemcertificatesGroup } from '../../_components/item-certificates-group/item-certificates-group';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadoService } from '../../_service/certificado-service';
import { CertifyInterface } from '../../_interface/CertifyInterface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificates-form',
  imports: [
    PageHeader,
    SecondaryButton,
    PrimaryButton,
    ItemcertificatesGroup,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificates-form.html',
  styleUrl: './certificates-form.css',
})
export class certificatesForm {
  atividade: string = '';
  @ViewChild('form') form!: NgForm;
  certificado: CertifyInterface = {
    id: '',
    nome: '',
    atividades: [],
    data: '',
  };

  constructor(private certificadoService: CertificadoService) {}
  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    if (this.atividade.length == 0) {
      return;
    }
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  removerAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  adicionarCertificado() {
    if (!this.formValido()) {
      return;
    }

    this.certificado.id = uuidv4();
    this.certificado.data = this.getDataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.clearForm();
  }

  getDataAtual() {
    let dataAtual: Date = new Date();
    let dia: string = String(dataAtual.getDate()).padStart(2, '0');
    let mes: string = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let ano: string = String(dataAtual.getFullYear());

    let dataFormatada: string = `${dia}/${mes}/${ano}`;

    return dataFormatada;
  }

  estadoInicialCertificado(): CertifyInterface {
    return {
      id: '',
      nome: '',
      atividades: [],
      data: '',
    };
  }

  clearForm() {
    this.certificado = this.estadoInicialCertificado();
    this.form.resetForm();
  }
}
