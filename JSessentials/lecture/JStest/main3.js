//// Ch4. JS 클래스부터 시작
const mei = {
  firstName: "Mei",
  lastName: "Kim",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(mei.getFullName());

const joe = {
  firstName: "Joe",
  lastName: "Boo",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(joe.getFullName());

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const meii = new user("Mei", "Kim");
const joee = new user("Joe", "Park");

console.log(meii.getFullName());
console.log(joee);

// this
const mei = {
  name: "mei",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
mei.normal();
mei.arrow();

const joe = {
  name: "joe",
  normal: mei.normal,
  arrow: mei.arrow,
};
joe.normal();
joe.arrow();

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const mei = new Uder("Mei");
mei.normal();
mei.arrow();

const timer = {
  name: "Time!",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};
timer.timeout();

// ES6 Classes
