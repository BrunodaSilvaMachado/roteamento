import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-protegido',
  templateUrl: './pagina-protegido.component.html',
  styleUrls: ['./pagina-protegido.component.css']
})
export class PaginaProtegidoComponent {
  constructor(private auth: AuthService, private router: Router) {
    
  }
  logout(){
    this.auth.logout();
    this.router.navigate([""])
  }
}
