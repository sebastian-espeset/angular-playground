import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css'],
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string = 'William';
  lastName: string = 'Wallace';
  phoneNumber: string = '(201) 748-6000';
  jobTitle: string = 'senior assistant vice president';

  setProperty(event: Event) {
    let target = event.target as HTMLInputElement;
    let property: string = target.id;
    switch (property) {
      case 'firstNameInput':
        this.firstName = target.value;
        break;
      case 'lastNameInput':
        this.lastName = target.value;
        break;
      case 'phoneNumberInput':
        this.phoneNumber = target.value;
        break;
      case 'jobTitleInput':
        this.jobTitle = target.value;
        break;
      default:
        console.warn('No matching ID found!');
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
