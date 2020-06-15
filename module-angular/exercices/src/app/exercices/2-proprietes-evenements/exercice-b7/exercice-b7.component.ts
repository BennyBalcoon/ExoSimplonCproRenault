import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b7",
  templateUrl: "./exercice-b7.component.html",
  styleUrls: ["./exercice-b7.component.css"],
})
export class ExerciceB7Component implements OnInit {
  public styles = [
    {
      width: 200,
      height: 100,
      color: "orangered",
    },
    {
      width: 100,
      height: 80,
      color: "pink",
    },
    {
      width: 350,
      height: 190,
      color: "green",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  increaseWidth(index: number) {
    this.styles[index].width = this.styles[index].width + 10;
    console.log(index);
  }
}
