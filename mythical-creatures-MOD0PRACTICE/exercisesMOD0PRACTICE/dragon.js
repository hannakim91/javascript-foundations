class Dragon {
  constructor(name, rider, hunger) {
    this.name = name;
      console.log(name);
    this.rider = rider;
      console.log(rider);
    this.color = 'blue';
    if (hunger === undefined) {
      this.hunger = 3;
      this.hungry = true;
    } else if (hunger > 0) {
      this.hunger = hunger;
      this.hungry = true;
    } else {
      this.hunger = hunger
      this.hungry = false;
    }
  }

  eat() {
    if (this.hunger > 1) {
      return this.hunger--;
    } else if (this.hunger = 0) {
      return this.hungry = false;
    } else {
      return this.hungry = false;
    }
  }
}

module.exports = Dragon;

// some help on it https://turingschool.slack.com/archives/C012S1MEJ66/p1588627763009900
