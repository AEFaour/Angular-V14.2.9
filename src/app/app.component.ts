import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'labonneaffaire';
  message: string = "";
  list;

  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.list = this.dataService.listArticle;
    console.log("Ici ngOnInit()");
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
