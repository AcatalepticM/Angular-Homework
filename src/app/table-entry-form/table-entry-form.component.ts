import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-entry-form',
  templateUrl: './table-entry-form.component.html',
  styleUrls: ['./table-entry-form.component.css']
})
export class TableEntryFormComponent {
  @Input() showModal: boolean;
  @Input() userType: string;

  hide() {
    this.showModal = false;
  }
}
