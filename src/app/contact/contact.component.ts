import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      this.apiService.submitContact(this.form.value).then((res) => {
        console.log(res);
      });
    }
  }
}
