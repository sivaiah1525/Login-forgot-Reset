import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: any;

  constructor(
    private fb: FormBuilder,
    private tokenserve: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginDetails = this.fb.group({
      mailid: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(data) {

    if (this.tokenserve.gettokenemailid() !== data.mailid && this.tokenserve.gettokenpassword() !== data.password) {
      return alert('mismatch mailid && password')
    } else {
      this.router.navigate(['/navbar'])
    }
  }

}
