import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddnewsService {

  constructor() { }

  news = [{
    "summary": "news summary",
    "description" : "news description"
  }]

  getNews(){
    return this.news;
  }

  addnews(news){
    this.news.push(news);
  }
}
