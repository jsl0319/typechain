class Human {
  public name:string;
  public age:number;
  public gender:string;
  constructor(name:string, age:number, gender:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Human('zsun',22,'female');

const printInfo = (person:Human) : void => {
  console.log(`저는 ${person.name}이고 나이는 ${person.age}살이며 ${person.gender}입니다.`)
}

printInfo(person);