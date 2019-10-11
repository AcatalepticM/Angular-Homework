import { Component } from '@angular/core';
import {STUDENTS} from './table/types/student';
import {TEACHERS} from './table/types/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mark\'s Angular App';
  studentArray = STUDENTS;
  teacherArray = TEACHERS;
}
