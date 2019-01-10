import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { Empresa } from '../../models/empresa';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../services/http.service';


@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  jugador: Jugador;
  empresa: Empresa;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder,     private http:HttpService  ) {
    this.jugador = new Jugador();
    this.empresa = new Empresa();
  }

  ngOnInit()  {
    this.registerForm = this.formBuilder.group({
            nombreE: ['', Validators.required],
            codigo: ['', Validators.required]
        });
  }

get f() { return this.registerForm.controls; }
  tabla() {{}
   this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {return;}



    this.jugador.nombreEmpresa=this.registerForm.value.nombreE;
    this.jugador.codigo=this.registerForm.value.codigo;


    this.empresa.nombre=this.jugador.nombreEmpresa;
    let json = JSON.stringify(this.empresa);
    let params =  'json'+json;
    this.http.post('/joinGame',json).subscribe(
      (response:any) => {
          if(response.status == 200){
            console.log('ok');
            alert("Tu nombre de empresa sera: "+this.jugador.nombreEmpresa);
    this.router.navigate(['/tabla',this.jugador.nombreEmpresa,this.jugador.codigo]);

          }
          else{
            console.log(response);
          }
     });
//    alert("Tu nombre de empresa sera: "+this.jugador.nombreEmpresa);

  }
}
