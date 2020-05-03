import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddnewsService } from 'src/app/core/services/addnews.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addnewsForm = new FormGroup({
    summary: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });
  constructor(private addNewsService : AddnewsService, private router:Router) { }

  ngOnInit(): void {
  }

  addNews(){
    this.addNewsService.addnews(this.addnewsForm.value);
    this.router.navigateByUrl('/latestnews');
  }

}
