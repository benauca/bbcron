import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  auth:boolean;
  constructor(private _lService: LoginService) {
  this.auth = this._lService.isValid;
    console.log("EStá autorizado: " + this.auth);
  }

  ngOnInit() {
    this.auth = this._lService.isValid;
    console.log("EStá autorizado: " + this.auth);
    }
}



