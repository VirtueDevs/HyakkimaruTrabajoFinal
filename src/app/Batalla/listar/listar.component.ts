import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Batalla } from 'src/app/Modelo/Batalla';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  batallas:Batalla[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit()  {
    this.service.getBatallas()
    .subscribe(data=>{
      this.batallas=data;
    })
  }

}
