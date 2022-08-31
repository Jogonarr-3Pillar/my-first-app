import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message: string = 'No message';
  @Input() type: string = 'info';

  constructor() {}

  ngOnInit(): void {
    let allowedTypes = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    if (!allowedTypes.includes(this.type)) {
      this.type = 'info';
    }
  }
}
