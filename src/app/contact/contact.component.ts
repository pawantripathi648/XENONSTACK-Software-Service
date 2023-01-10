import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required]),
    message: new UntypedFormControl('', [
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
