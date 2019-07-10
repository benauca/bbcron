import { HomeComponent} from '../home/home.component';
import { Component, OnInit } from '@angular/core';
import {LoginService} from './../../services/login.service';
import {User} from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  constructor( private _loginService: LoginService) {
    this._loginService = _loginService;
  }
  /**
   * Validamos el usuario
   */
  public login(username: string, password: string) {
    console.log("username:  " + username + " Password: " + password);
    this.username = username;
    this.password = password;
    console.log("Validamos contra el servicio");
    return this._loginService.validate(username,password);
  }
  ngOnInit(): void {
    return;
  }
  
}
