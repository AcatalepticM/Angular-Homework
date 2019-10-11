import {Component, Input} from '@angular/core';
import {Teacher} from './types/teacher';
import {Student} from './types/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() students: [Student];
  @Input() teachers: [Teacher];
  showModal = false;
  userType = '';

  onClick(type) {
    this.showModal = true;
    this.userType = type;
    if (type === 'student') {
     // parent.document.getElementById('modalInjection').innerHTML = 'student';
    } else if (type === 'teacher') {
     // parent.document.getElementById('modalInjection').innerHTML = 'teacher';
    }
  }
}
