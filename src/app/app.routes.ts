import { Routes } from '@angular/router';
import { certificates } from './_pages/certificates/certificates';
import { Certificate } from './_pages/certificate/certificate';
import { certificatesForm } from './_pages/certificates-form/certificates-form';

export const routes: Routes = [
  { path: 'certificates', component: certificates },
  { path: 'certificate/new', component: certificatesForm },
  { path: 'certificate/:id', component: Certificate },
];
