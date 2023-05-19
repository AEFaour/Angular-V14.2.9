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
  textAltImg: string = "Titre alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCtrlArticle() {

    if (this.ctrlArticle === true) {
      this.titreArticle = "Titre de l'article!";
      this.ctrlArticle = false;
      this.textAltImg = "Titre alternative de l'image L"
      this.urlImg = "https://via.placeholder.com/600x375";
    } else {
      this.titreArticle = "---";
      this.ctrlArticle = true;
      this.textAltImg = "Titre alternative de l'image"
      this.urlImg = "https://via.placeholder.com/400x250";

    }
  }
  onLike(){
    this.totalNbrLike ++;
  }

}
