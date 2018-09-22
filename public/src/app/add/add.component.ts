import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) {}

  authors = [];
  newAuthor = {name: ''};

  ngOnInit() {
  }

  submitAuthor(){
    var tempObservable = this._httpService.createAuthor(this.newAuthor);
    tempObservable.subscribe((data:any) => {
      if (data.errors) {
        console.log(data.errors)
        this._router.navigate(['/add']);
      } else {
        console.log("Made a new Author", data);
        this.newAuthor = data;
        this._router.navigate(['/']);
      }
    })
  }

}



