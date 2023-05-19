import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Output() info = new EventEmitter<string>();
 
  textAltImg: string = "Titre alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike : number = 0;
  comment : string = "Ceci est un commentaire";
  dispo : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.totalNbrLike ++;
    this.info.emit(this.titreArticle);
  }


}
