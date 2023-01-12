import { Router } from '@angular/router';
import { Admi } from '../../Interfaces/IAdmi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastsService } from 'src/app/Services/toasts.service';
import { MetodosService } from 'src/app/Services/metodos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  admis!: Admi;

  userAdmi: Admi[] = [
    { id: 1, nombres: "Administrador", apellidos: "General", user: "root", password: "root", rol: "admi", estado: 1 },
    { id: 2, nombres: "Angelo", apellidos: "Villamar", user: "angelo1", password: "angelo11", rol: "animales", estado: 1 },
    { id: 3, nombres: "John", apellidos: "Torres", user: "john1", password: "john11", rol: "adopcion", estado: 1 },
    { id: 4, nombres: "Josue", apellidos: "Baque", user: "josue1", password: "josue11", rol: "donacion", estado: 1 },
    { id: 5, nombres: "Genesis", apellidos: "Sanchez", user: "genesis1", password: "genesis11", rol: "rescate", estado: 1 }
  ]

  constructor (
    private toast: ToastsService,
    private fb: FormBuilder,
    private metodos: MetodosService,
    private router: Router
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  ingresar(){
    if(this.form.invalid){
      this.toast.error('<strong>Error</strong><br> Todos los campos son obligatorio.');
      return
    }

    if(!this.metodos.verificarUser(this.userAdmi, this.form.get('usuario')?.value)){
      this.toast.error('<strong>Error</strong><br> El usuario ingresado no existe.');
      this.form.reset();
      return;
    }

    if(!this.metodos.verificarPass(this.userAdmi, this.form.get('password')?.value)){
      this.toast.advertencia('<strong>Advertencia</strong><br> Contraseña incorrecta, intente de nuevo.');
      this.form.reset();
      return;
    }

    if(this.metodos.verificacionFinal(this.userAdmi, this.form.get('usuario')?.value, this.form.get('password')?.value) != null){
      this.admis = this.metodos.verificacionFinal(this.userAdmi, this.form.get('usuario')?.value, this.form.get('password')?.value);
      this.router.navigate(['/admi-general'],{
        state:{
          data: this.admis
        }
      });      
      this.toast.exitoso('<strong>Bienvenido</strong><br> Acceso éxitoso al area admnistrativa.');
    }

  }
}
