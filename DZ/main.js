class Transport {
    constructor(color, speed, title){
        this.color = color;
        this.speed = speed;
        this.title  = title;
    }

    startEngine(message){
        console.log(`${this.title}`);
    }
    stop(){
        console.log('Stop');
    }
}

const bmw = new Transport("Black", 10000, "BMW")//instanace || object class="Transport
console.log(bmw);
bmw.startEngine("BMW is started")

class Car extends Transport {
    constructor(color, speed, title, weight) {
        super(color, speed, title);
        this.weight = weight;
    }
}


class AIRtransport {
    constructor(color, speed, title){
        this.color = color;
        this.speed = speed;
        this.title  = title;
    }

    startEngine(message){
        console.log(`${this.title}`);
    }
    stop(){
        console.log('Stop');
    }
}

const tesla = new AIRtransport("White", 1000, "Tesla")//instanace || object class="Transport
console.log(tesla);
tesla.startEngine("Tesla is started")

class startEngine extends AIRtransport {
    constructor(color, speed, title, weight) {
        super(color, speed, title);
        this.weight = weight;
    }
}
