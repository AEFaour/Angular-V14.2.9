import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent implements OnInit {

  message: string = "";
  list;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.list = this.dataService.listArticle;
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
