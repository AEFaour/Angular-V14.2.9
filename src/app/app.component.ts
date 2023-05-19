import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'labonneaffaire';
  titre1: string = "Vélo";
  titre2: string = "TV";
  titre3: string = "Jouet";
  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;
  constructor() { }

  ngOnInit(): void {
    console.log("Ici ngOnInit()");
  }

}
