// 생성자, 클래스 변수, 클래스 함수 정의에는 변수 선언을 위한 키워드 (var, let, const, ..) 가 사용되지 않는다.
class Shape {
    static create(x,y) { return new Shape(x,y);}
    name = 'Shape'
    constructor (x,y){
        this.move(x, y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
s.area();

class Circle extends Shape {
    static create(x,y,radius) {return new Shape(x,y,radius);}
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if(this.radius == 0) return super.area();
        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
c.area(); // 100