import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router,private _httpService: HttpService) {}

  ngOnInit() {
    console.log("am i deleting")
    this._route.params.subscribe((params)=>{
      console.log('the id is:', params['id']);
      var id = params['id'];
      var tempObservable = this._httpService.deleteAuthor(id);
      tempObservable.subscribe((data:any)=>{
        console.log("did i delte?", data);
        this._router.navigate(['/']);
      })
    })
  }

}
