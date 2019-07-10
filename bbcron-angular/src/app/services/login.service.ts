// Va a ser el servicio que se logue contra el modelo de datos
import { Injectable } from '@angular/core';

//Servicio que nos da información de los heroes.
@Injectable()
export class LoginService {

  public isValid: boolean;
  private _user: User = {
    name: "benauca",
    password: "sansenoy"
  }
  constructor() {
    console.log("Servicio listo para Usar!!!");
    console.log("El usuario contra el que validar es: " + this._user.name);
  }
  /**
   * No es necesario devolver el boolean en el metodo.
   */
  public validate(username: string, password: string) {
    if (username == this._user.name && password == this._user.password) {
      this.isValid = true;
    }else this.isValid = false;
    console.log("El usuario es valido: " + this.isValid);
    return this.isValid;
  }

}

export interface User {
  name: string;
  password: string;
}
