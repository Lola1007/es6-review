export class Person {
    constructor(name, age) {
        console.log("Person constructor called!");
        this.name = name;
        this.age = age;
    }

    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

export const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!", random: Math.random() };
            resolve(data);
            reject(new Error("Failed to fetch data"));
        }, 2000);
});
};

export const fetchNumber = () => {
    return new Promise((resolve, reject) => {
        let num = Math.random();
     if (num > 0.5 ) { 
        resolve(num) ;
      } else {
        reject(new Error("Number too low"));
      }
    });
};

export const usersMap = new Map();
usersMap.set(1, "Jackson");
usersMap.set(2, "Tanya");