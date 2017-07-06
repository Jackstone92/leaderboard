import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';


Meteor.startup(function() {

  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //
  //   getGreeting() {
  //     return `Hi! I am ${this.name}.`;
  //   }
  //
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }
  //
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //
  //   getGreeting() {
  //     if(this.title) {
  //       return `Hi! I am ${this.name}. I work as a ${this.title}.`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  //
  //
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'Assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //
  //   getGreeting() {
  //     if(this.preferredLanguage) {
  //       return `Hi! I am ${this.name} and I am a ${this.preferredLanguage} developer.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  //
  // const me = new Programmer("Jack", 24, 'JavaScript');
  // console.log(me.getGreeting());




  // This. Fix to bind this - maintaining bindings //
  // let obj = {
  //   name: 'Jack',
  //   printName() {
  //     console.log(`Name: ${this.name}`);
  //   }
  // };
  //
  // // obj.printName();
  // setTimeout(obj.printName.bind(obj), 1000);



  // ES6 Object Spread Operator //
  // Lets you copy properties of one object onto another object //
  // let user = {
  //   name: 'Jack',
  //   location: 'London'
  // }
  //
  // let person = {
  //   // spread out user onto person //
  //   ...user,
  //   age: 24
  // }
  //
  // console.log(person);


  // ES6 Object Property Shorthand //
  // Define object properties when you have a variable of the same name //
  // let bike = 'Scott';
  // let stuff = {
  //   bike,
  //   laptop: 'mac'
  // };
  // console.log(stuff);


  // let house = {
  //   bedrooms: 2,
  //   bathrooms: 1.5
  // };
  //
  // let yearBuilt = 1995;
  //
  // let myHouse = {
  //   ...house,
  //   bedrooms: 3,
  //   yearBuilt,
  //   flooring: 'Carpet'
  // }
  //
  // console.log(myHouse);


});
