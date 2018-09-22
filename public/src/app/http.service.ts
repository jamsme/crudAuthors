import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAuthors(){
    return this._http.get('/authors');
  }

  createAuthor(auth){
    return this._http.post('/authors', auth);
  }

  oneAuthor(id){
    return this._http.get(`/authors/${id}`)
  }

  updateAuthor(auth){
    return this._http.put(`/edit/${auth._id}`, auth)
  }

  deleteAuthor(id){
    return this._http.delete(`/delete/${id}`);
  }

}



