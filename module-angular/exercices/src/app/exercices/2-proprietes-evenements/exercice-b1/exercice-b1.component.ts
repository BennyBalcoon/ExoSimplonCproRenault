import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b1",
  templateUrl: "./exercice-b1.component.html",
  styleUrls: ["./exercice-b1.component.css"],
})
export class ExerciceB1Component implements OnInit {
  public chien =
    "https://www.blv.admin.ch/blv/fr/home/tiere/tierschutz/heim-und-wildtierhaltung/hunde/augen-auf-beim-hundekauf/_jcr_content/image.imagespooler.jpg/1520345385829/588.1000/iStock_000010876067_Large.png";

  public chats = [
    "https://i.ytimg.com/vi/QxT1Y9ZaNEk/hqdefault.jpg",
    "https://images.lpcdn.ca/641x427/201010/10/206396.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/surprised-cat-hydrocephalus-kevin-theadventuresofkev17.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}
}
