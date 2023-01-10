import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  items: any[] = [];
  constructor(private apiService: ApiService) {}
  user: any;
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    if (!this.user) {
      window.location.replace(window.location.host);
    }
    this.getContacts();
  }
  getContacts(): void {
    this.apiService.getContacts().then((res) => {
      this.items = res.items;
    });
  }
}
