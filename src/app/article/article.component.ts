import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  article: Article;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    // Prevent Event Propagation
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    // Prevent Event Propagation
    return false;
  }

  ngOnInit(): void {}
}
