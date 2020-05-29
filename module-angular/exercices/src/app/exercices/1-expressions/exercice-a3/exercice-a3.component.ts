import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-a3",
  templateUrl: "./exercice-a3.component.html",
  styleUrls: ["./exercice-a3.component.css"],
})
export class ExerciceA3Component implements OnInit {
  direBonjour() {
    return "Bonjour";
  }

  concat(args: string[]) {
    console.log(args.join(""));
    return args.join();
  }

  constructor() {}

  ngOnInit(): void {}
}
