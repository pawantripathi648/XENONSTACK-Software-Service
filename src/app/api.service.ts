import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  pb = new PocketBase('http://127.0.0.1:8090');

  constructor() {}

  async submitContact(data: any): Promise<any> {
    return await this.pb.collection('contact_us').create(data);
  }

  async login(username: string, password: string): Promise<any> {
    return await this.pb
      .collection('users')
      .authWithPassword(username, password);
  }

  async getContacts(): Promise<any> {
    return await this.pb.collection('contact_us').getFullList(200, {
      sort: '-created',
    });
  }
}
