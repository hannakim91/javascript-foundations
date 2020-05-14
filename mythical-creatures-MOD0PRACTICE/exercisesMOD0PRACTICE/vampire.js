class Vampire {
  constructor(name, pet) {
    this.name = name;
    console.log(name);
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
    console.log(pet);
    this.thirsty = true;
  }

  drink() {
    return this.thirsty = false;
  }
}


module.exports = Vampire;
