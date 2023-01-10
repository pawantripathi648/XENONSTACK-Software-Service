import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.apiService
      .login(this.form.value.username, this.form.value.password)
      .then((res) => {
        sessionStorage.setItem('user', JSON.stringify(res));
        window.location.replace(
          'http://' + window.location.host + '/dashboard'
        );
      });
  }
}
