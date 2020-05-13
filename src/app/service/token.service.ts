import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(

  ) { }


  settokenpassword(data) {
    return window.localStorage.setItem('password', data)
  }
  settokenemailid(data) {
    return window.localStorage.setItem('mailid', data)
  }


  gettokenpassword() {
    return window.localStorage.getItem('password')
  }
  gettokenemailid() {
    return window.localStorage.getItem('mailid')
  }


  removetokenpassword() {
    return window.localStorage.removeItem('password')
  }
  removetokenemailid() {
    return window.localStorage.removeItem('mailid')
  }
}
