var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

1. var penguins = [gunter, ramon, fred];

2. penguins[0];

3. var secondPenguin = penguins[1];

4. console.log(penguins[2]);

5. penguins.push(secondPenguin);

6. console.log(penguins.length);

7. gunter.canFly = true;

8. gunter.sayHello();

9. for(i=0; i< penguins.length; i++) {
  console.log(penguins[i]);
}

10. for(i=0; i< penguins.length; i++) {
    penguins[i].sayHello();
}

11. for(i=0; i< penguins.length; i++) {
    penguins[i].numberOfFeet = 2;
  }

12. for(i=0; i< penguins.length; i++) {
    if (penguins[i].canFly == true) {
      console.log(penguins[i].name + `can fly`)
    }
  }
