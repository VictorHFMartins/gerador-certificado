import { Component, input, output } from '@angular/core';
import { certificatesForm } from '../../_pages/certificates-form/certificates-form';

@Component({
  selector: 'app-item-certificates-group',
  imports: [],
  templateUrl: './item-certificates-group.html',
  styleUrl: './item-certificates-group.css',
})
export class ItemcertificatesGroup {
  itemName = input<string>();
  remove = output<void>();
}
