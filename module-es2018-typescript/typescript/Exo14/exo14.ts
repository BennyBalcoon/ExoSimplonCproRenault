class Rectangle {
    largeur: number;
    hauteur: number;
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.largeur = 100;
        this.hauteur = 100;
        this.x = x;
        this.y = y;
    }

    moveRect(newX?: number, newY?: number) {
        if (newX == null || newY == null) {
            this.x = this.x;
            this.y = this.y
        }
        else {
            this.x = newX;
            this.y = newY;
        }
    }
}

let rect1: Rectangle = new Rectangle(20, 30);

console.log(rect1);

rect1.moveRect(50, 70);

console.log(rect1);