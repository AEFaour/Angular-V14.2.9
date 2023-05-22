import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description : string;
  @Input() urlImg : string;
  @Input() textAltImg: string;
  @Input() dispo : boolean;
  @Output() info = new EventEmitter<string>();
 
  colorText: string = "";
  
  totalNbrLike : number = 0;
  comment : string = "Ceci est un commentaire";


  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.totalNbrLike ++;
    this.info.emit(this.titreArticle);
  }

  getColor() {
    this.dispo === true ? this.colorText =  "black" : this.colorText = "gold";
    return this.colorText;
  }


}
