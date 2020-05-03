import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { AddNewsComponent } from '../add-news/add-news.component';
import { AddnewsService } from 'src/app/core/services/addnews.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  constructor(private router:Router, private login:LoginService, private newsService : AddnewsService) { }
  loginState : boolean
  news : any
  ngOnInit(): void {
    if(this.login.loginState === "LOGIN"){
      this.loginState = true;
    }
    else{
      this.loginState = false;
    }

    this.login.loginStateEmitter.subscribe(()=>{
      if(this.login.loginState === "LOGIN"){
        this.loginState = true;
      }
      else{
        this.loginState = false;
      }
    });

    this.news = this.newsService.getNews();
  }

  addNews(){
    this.router.navigateByUrl('/latestnews/add');
  }

}
