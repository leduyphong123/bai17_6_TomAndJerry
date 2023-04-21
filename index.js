let Rat = function (name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.setStatus = function (bool) {
        this.status = bool;
    }
    this.say = function (text) {
        document.write(this.name + " : " + text);
    }
}

function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.say = function (text) {
        document.write(this.name + ": " + text);
    }
    this.bat = function (rat) {
        if (this.speed > rat.speed) {
            this.rat = rat;
            document.write("<br/>" + this.name + " bat duoc " + this.rat.name);
        }
    }
    this.eat = function () {
        if (this.rat.status == true) {
            document.write("<br/>" + this.name + " an " + this.rat.name);
            this.weight += this.rat.weight;
        }
    }
}
let jerry = new Rat("jeery", 10, 20, true);
let tom = new Cat("tom", 30, 30);
tom.bat(jerry);
tom.eat();
tom.say("<br/>so ky cua " + tom.name + " la: " + tom.weight);
