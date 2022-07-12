import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article;

  constructor() {}

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
