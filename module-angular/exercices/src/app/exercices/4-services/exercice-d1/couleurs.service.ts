import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CouleursService {
  private colors: string[] = ["#F39131", "#48ACB7", "#4D2D41", "#F4C150", "#23272C"];

  constructor() {}

  public getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
