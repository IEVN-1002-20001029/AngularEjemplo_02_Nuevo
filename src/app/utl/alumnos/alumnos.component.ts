import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-root',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
 
  
  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFiler:string='';
  alumnoTitle!:string
  dataSourse:any=[];

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }




  
  
  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'pedro',
      apaterno:'Lopez',
      amaterno:'muñoz',
      correo:'pedro@gmail.com',
    },
    {
      matricula:12345,
      nombre:'oscar',
      apaterno:'mares',
      amaterno:'martinez',
      correo:'mares@gmail.com',

    },
    {
      matricula:12346,
      nombre:'aldo',
      apaterno:'delado',
      amaterno:'gutierrez',
      correo:'aldo@gmail.com',

    },
  ]

  ngOnInit(): void {
    this.dataSourse=this.alumnosIric
  }


}
