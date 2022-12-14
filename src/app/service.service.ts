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

  //------Trouver un user par son id;
  FindUser(id: number){
    return this.http.get(this.host+"user/"+id);
  }

  //Trouver par categorie
  findBtCate(id: number, user: number){
    return this.http.get(this.host+"note/liste/"+id+"/"+user)
  }
  //---Ajouter les categorie
  AddCategorie(id:number, data: any){
    return this.http.post(this.host+"cate/add/"+id, data)
  }

  //----Ajouter une note
  AddNote(id: number,id_cate: number, data: any){
    return this.http.post(this.host+"note/add/"+id+"/"+id_cate, data)
  }

  //-----List des notes
  myNote(id: number){
    return this.http.get(this.host+"note/mynote/"+id);
  }

  //----Liste des categorie
  ListCate(id: number){
    return this.http.get(this.host+"cate/list/"+id)
  }

  //---Pour voir les details des activité
  ViewDetail(id: number, categorie: any){
    return this.http.put(this.host+"cate/detail/"+id, categorie)
  }

  //----Detail des notes
  Detail(id: number){
    return this.http.get(this.host+"note/"+id);
  }

  //------- MOdifier le mot de passe du user
  updatePass(id: number, user: any){
    return this.http.put(this.host+"user/update/"+id, user);
  }

  //_------Pour modifier une note
  updateNote(id: number, note: any){
    return this.http.put(this.host+"note/update/"+id, note);
  }

  //------- Delete note
  delete(id:number, note: any){
    return this.http.put(this.host+"note/delete/"+id, note);
  }

  //-----Modifier et ajouter un numero et nom complet
  UpdateCompte(id: number, user: any){
    return this.http.put(this.host+"user/new/"+id, user);
  }
}
