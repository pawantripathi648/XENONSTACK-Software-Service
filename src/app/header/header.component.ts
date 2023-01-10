import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    console.log(this.user);
  }
  logout(): void {
    sessionStorage.clear();
  }
}
