import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from 'src/models/endereco.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  url = `https://viacep.com.br/ws`

  constructor(private http: HttpClient) { }

  getByCep(cep: string): Observable<Endereco>{
    const url = `${this.url}/${cep}/json`;
    return this.http.get<Endereco>(url);
  }

}
