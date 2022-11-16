import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  host : string = environment.host;

  constructor(private http : HttpClient) { }

  // ---Pour l'enregistrement de nouvel user
  AddUser(data: any){
    return this.http.post(this.host+"user/add", data);
  }

  //----Pour la connexion

  Login(pesudo: string, pass: string){
    return this.http.get(this.host+"user/login/"+pesudo+"/"+pass);
  }

  //---Ajouter les categorie
  AddCategorie(id:number, data: any){
    return this.http.post(this.host+"cate/add/"+id, data)
  }

  //----Ajouter une note
  AddNote(id: number, data: any){
    return this.http.post(this.host+"note/add/"+id, data)
  }

  //----Liste des categorie
  ListCate(id: number){
    return this.http.get(this.host+"cate/list/"+id)
  }
}
