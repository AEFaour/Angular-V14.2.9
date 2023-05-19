import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titreArticle: string = "Titre de l'article!";
  prixArticle: number = 12;
  ctrlArticle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onCtrlArticle() {

    if (this.ctrlArticle === true) {
      this.titreArticle = "Titre de l'article!";
      this.ctrlArticle = false;
    } else {
      this.titreArticle = "---";
      this.ctrlArticle = true;

    }
  }

}
