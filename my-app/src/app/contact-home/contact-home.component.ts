import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-home',
  standalone: true,
  imports: [],
  templateUrl: './contact-home.component.html',
  styleUrl: './contact-home.component.css',
})
export class ContactHomeComponent implements OnInit {
  isUnchanged = true;
  onCancel = () => {
    this.isUnchanged = !this.isUnchanged;
  };
  constructor() {}
  ngOnInit(): void {}
}
