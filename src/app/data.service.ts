import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data: any = [
    ["Vélo", "TV", "Jouet"],
    [80, 230, 15],
    ["Un super vélo tout terrain", "Très bonne qualité d'écran", "Neuf, jamais utilisé"],
    ["velo.jpeg", "tv.jpeg", "jouet.jpeg"],
    ["Un vélo", "Une télévision", "Un jouet pour enfant"],
    [false, true, true]
  ];

  listArticle = [
    {
      titreArticle: this.data[0][0],
      prixArticle: this.data[1][0],
      description: this.data[2][0],
      urlImg: `../assets/images/${this.data[3][0]}`,
      textAltImg: this.data[4][0],
      dispo: this.data[5][0]
    },
    {
      titreArticle: this.data[0][1],
      prixArticle: this.data[1][1],
      description: this.data[2][1],
      urlImg: `../assets/images/${this.data[3][1]}`,
      textAltImg: this.data[4][1],
      dispo: this.data[5][1]
    },
    {
      titreArticle: this.data[0][2],
      prixArticle: this.data[1][2],
      description: this.data[2][2],
      urlImg: `../assets/images/${this.data[3][2]}`,
      textAltImg: this.data[4][2],
      dispo: this.data[5][2]
    }
  ]
  constructor() { }
}