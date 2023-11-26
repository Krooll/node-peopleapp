const fs = require('fs');

const gender = ['male', 'female'];

const maleNames = ["Karol", "Piotrek", "Michał", "Igor", "Adrian", "Zygmunt", "Paweł", "Maciek", "Ferdynant"];

const femaleNames = ["Agata", "Alicja", "Elżbieta", "Patrycja", "Edyta", "Michalina", "Katażyna", "Marta", "Paulina", "Natalia"];

const lastNames = ["Krupnik", "Kownacka", "Ładzik", "Sobek", "Małysiak", "Zgoda", "Drążek", "Foks", "Pulit", "Hutyra"];

const randChoice = (arr) => {
    const randomIndex =  Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const people = [];

for (let i = 0; i < 20; i++ ) {
    const selectedGender = randChoice(gender);
    let selectedName;

    if (selectedGender === 'male') {
        selectedName = randChoice(maleNames);
    } else {
        selectedName = randChoice(femaleNames);
    }

    const selectedAge = Math.floor(Math.random() * (65 - 18 + 1) + 18);

    const newObject = {
        gender: selectedGender,
        firstName: selectedName,
        lastName: randChoice(lastNames),
        age: selectedAge
    };

    people.push(newObject);
};

const jsonString = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
