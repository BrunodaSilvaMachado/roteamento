import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password:string ="";

  constructor(private auth: AuthService, private router: Router) {
    
  }
  login(){
    if(this.auth.login(this.email, this.password)){
      this.router.navigate(["pagina-protegido"]);
      return;
    }
    alert("Login está invalido");
    this.password = "";
    this.email = "";
  }
}
