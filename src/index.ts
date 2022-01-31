interface Human {
  name:string;
  age:number;
  gender:string;
}

const person = {
  name : 'zsun',
  age : 20,
  gender: 'F'
}

const printInfo = (person:Human) : void => {
  console.log(`저는 ${person.name}이고 나이는 ${person.age}살이며 ${person.gender}입니다.`)
}

printInfo(person);