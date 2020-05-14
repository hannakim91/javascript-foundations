class Unicorn {
  constructor(name, color) {
    this.name = name;
    console.log(name);
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
    console.log(color);
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`
  }
}

module.exports = Unicorn;

// 1. read the test
// 2. ask self if pass/fail - why?
// 3. run test
// 4. make it pass
