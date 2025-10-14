// let obj = {
//     a : 1,
//     b : "Aditya"
// }
// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);

// let animal ={
//     eats: true
// }
// let rabbit ={
//     jumps: true
// }
// rabbit.__proto__ = animal; //sets rabbit[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created ...");
    }
    eats() {
        console.log("Eating ...");
    }
    jumps() {
        console.log("Jumping...");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Lion object is created ...");
    }
    eats() {
        super.eats();
        console.log("Roaring and eating ...");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);