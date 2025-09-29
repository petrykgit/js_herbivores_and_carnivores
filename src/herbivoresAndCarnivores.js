'use strict';

class Animal {
  // write your code here

  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  // write your code here

  constructor(name, helth) {
    super(name, helth);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  constructor(name, helth) {
    super(name, helth);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!(herbivore instanceof Herbivore)) {
      return;
    }

    if (herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      const animalToDelete = Animal.alive.findIndex((el) => el.health <= 0);

      Animal.alive.splice(animalToDelete, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
