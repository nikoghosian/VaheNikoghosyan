'use strict';

localStorage.setItem("number", 5);

localStorage.clear();

console.log(localStorage.getItem('number'));


function getRandomColor() {
    // Generate random values for red, green, and blue
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert the RGB values to hexadecimal format
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // Concatenate the hexadecimal values to form the color code
    const colorCode = `#${redHex}${greenHex}${blueHex}`;
    return colorCode;
}

// Usage example:
const randomColor = getRandomColor();
console.log(randomColor); // Output a random color code, e.g., "#1a2b3c"


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChechked')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = getRandomColor();
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChechked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = getRandomColor();
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const seriaLizedPersone = JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));






// function factorial(i) {
//     let p = 1;
//     while (i != 1){
//          p *=i--;
//     }

//     return p;
// };
// console.log(factorial(5));


// getAvgAgeByColor([
//     {name: "Joe", age: 13, hairColor: "red"}, 
//     {name: "Mike", age: 10, hairColor: "brown"}, 
//     {name: "Jane", age: 4, hairColor: "red"}, 
//     {name: "Susan", age: 30, hairColor: "brown"}
// ], "brown"); 



function getPersonWithMostFriendsByName(people, friendName) {
 let filtredPeople = people.map(function (personObj) {
        return {
            name: personObj.name,
            count: personObj.friends.filter(function(friendObj) {
              return friendObj.name === friendName;
            }).length
        };
    });
    



getPersonWithMostFriendsByName([
    {
        name: "Joe",
        friends: [
            { name: "Susan", age: 12 },
            { name: "Jane", age: 43 },
            { name: "Susan", age: 33 }
        ]
    },
    {
        name: "Liz",
        friends: [
            { name: "Mila", age: 12 },
            { name: "Susan", age: 43 },
            { name: "Jane", age: 33 }
        ]
    },
    {
        name: "Mike",
        friends: [
            { name: "Susan", age: 12 },
            { name: "Susan", age: 43 },
            { name: "Susan", age: 33 }
        ]
    }
], "Susan"); 