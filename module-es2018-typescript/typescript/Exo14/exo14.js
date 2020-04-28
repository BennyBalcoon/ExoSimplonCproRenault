var Rectangle = /** @class */ (function () {
    function Rectangle(x, y) {
        this.largeur = 100;
        this.hauteur = 100;
        this.x = x;
        this.y = y;
    }
    Rectangle.prototype.moveRect = function (newX, newY) {
        if (newX == null || newY == null) {
            this.x = this.x;
            this.y = this.y;
        }
        else {
            this.x = newX;
            this.y = newY;
        }
    };
    return Rectangle;
}());
var rect1 = new Rectangle(20, 30);
console.log(rect1);
rect1.moveRect(50, 70);
console.log(rect1);
