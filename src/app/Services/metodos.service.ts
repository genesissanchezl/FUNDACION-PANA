import { Injectable } from '@angular/core';
import { Admi } from '../Interfaces/IAdmi';

@Injectable({
  providedIn: 'root'
})

export class MetodosService {
  comprobacion: boolean = false;
  administrador!: Admi;

  verificarUser(userAdmi: Admi[], user: string):boolean{
    userAdmi.forEach(element => {
      if(element.user === user){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificarPass(userAdmi: Admi[], password: string):boolean{
    this.comprobacion = false;
    userAdmi.forEach(element => {
      if(element.password === password){
        this.comprobacion = true;
      }
    });
    return this.comprobacion;
  }

  verificacionFinal(userAdmi: Admi[], user: string, password: string):Admi{
    userAdmi.forEach(element =>{
      if(element.user === user && element.password === password){
        this.administrador = element;
      }
    });
    return this.administrador;
  }
}
