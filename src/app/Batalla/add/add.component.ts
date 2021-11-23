import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Object } from 'src/app/Modelo/Object';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
objetos:Object[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getObjetos()
    .subscribe(data=>{
      this.objetos=data;
    })
  }

}
