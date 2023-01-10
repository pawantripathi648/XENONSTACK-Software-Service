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
}
