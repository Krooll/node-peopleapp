const fs = require('fs');

const gender = ['male', 'female'];

const maleNames = ["Karol", "Piotrek", "Michał", "Igor", "Adrian", "Zygmunt", "Paweł", "Maciek", "Ferdynant"];

const femaleNames = ["Agata", "Alicja", "Elżbieta", "Patrycja", "Edyta", "Michalina", "Katażyna", "Marta", "Paulina", "Natalia"];

const lastNames = ["Krupnik", "Kownacka", "Ładzik", "Sobek", "Małysiak", "Zgoda", "Drążek", "Foks", "Pulit", "Hutyra"];

const phoneNumbers = [
    "505-505-505", 
    "543-564-789", 
    "665-440-667", 
    "767-456-243", 
    "676-678-980", 
    "430-533-234", 
    "098-564-234", 
    "776-556-909", 
    "675-345-555",
    "786-564-798"
]

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
    };

    const selectedLastName = lastNames[Math.floor(Math.random () * lastNames.length)];
    const selectedAge = Math.floor(Math.random() * (65 - 18 + 1) + 18);
    const selectedPhoneNumber = randChoice(phoneNumbers);
    const selectedMailAdress = selectedName + '.' + selectedLastName + '@gmail.com';

    const newObject = {
        gender: selectedGender,
        firstName: selectedName,
        lastName: selectedLastName,
        age: selectedAge,
        phone: selectedPhoneNumber,
        mail: selectedMailAdress
    };

    people.push(newObject);
};

const jsonString = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
