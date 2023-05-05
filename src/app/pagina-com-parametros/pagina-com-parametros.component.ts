import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit {
  id: number| null = null;
  idade: number| null = null;
  nome: string | null = "";
  constructor(private router: ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.paramMap.subscribe(p=>{
      this.id = Number(p.get("id"));
    });

    this.router.queryParamMap.subscribe(p=>{
      this.idade = Number(p.get("idade"));
      this.nome = p.get("nome");
    });
  }


}
