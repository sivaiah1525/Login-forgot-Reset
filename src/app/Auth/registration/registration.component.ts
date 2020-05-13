import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationDetails=this.fb.group({
    UserName:['',Validators.required],
    Country:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    cfmpassword:['',Validators.required]
  })
  constructor(
    private fb :FormBuilder,
    private router :Router,
    private token : TokenService
  ) { }

  ngOnInit(): void {
  
  }


  submitdata(data){
    if(data.password !== data.cfmpassword){
      return alert("password is mismatch")
    }else{
      this.token.settokenemailid(data.email)
      this.token.settokenpassword(data.password)
      this.router.navigate(['/login'])
    }

  }

}
