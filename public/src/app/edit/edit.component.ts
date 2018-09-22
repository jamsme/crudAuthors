import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router,private _httpService: HttpService) {}

  editAuthor = {name: ''};

  ngOnInit() {
    console.log("am i getting specific OnInit?")
    this._route.params.subscribe((params)=>{
      console.log('the id is:', params['id']);
      var id = params['id'];
      var tempObservable = this._httpService.oneAuthor(id);
      tempObservable.subscribe((data:any)=>{
        this.editAuthor = data;
      })
    })
  }

  submitEdit(){
    var tempObservable = this._httpService.updateAuthor(this.editAuthor);
    tempObservable.subscribe((data:any) => {
      if(data.errors) {
        console.log(data.errors);
        this._router.navigate(['/']);
      } else {
        console.log("got data", data);
        this._router.navigate(['/']);
      }
    })
  }

}
