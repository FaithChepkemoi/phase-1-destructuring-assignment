const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

//const farmAnimals = 'cow horse sheep pig chicken';
const animalSounds = ['moo', 'neigh', 'baa', 'oink', 'cluck'];

// Split the animals string into an array
const animalsArray = farmAnimals.split(' ');

// Destructure both arrays
const [cow, horse, sheep, pig, chicken] = animalsArray;
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Create a mapping of animals to their sounds
const animalSoundMap = {
  [cow]: moo,
  [horse]: neigh,
  [sheep]: baa,
  [pig]: oink,
  [chicken]: cluck,
};

// Log the sounds for each animal
//console.log(`${cow} makes a sound: ${animalSoundMap[cow]}`);    // Output: "cow makes a sound: moo"
console.log(`${animalSoundMap[cow]} to equal: ${cow}`); 



// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.


// Filter out 'horse' from the array
const fourAnimals = animalsArray.filter(animal => animal !== 'horse');

// Destructure to assign names
const [bessie, dolly, babe, little] = fourAnimals;

console.log(bessie); // Output: "cow"
console.log(dolly);  // Output: "sheep"
console.log(babe);   // Output: "pig"
console.log(little); // Output: "chicken"

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Define colors for the animals
const animalColors = ['black and white', 'black', 'pink'];

// Destructure the first three colors
const [blackAndWhite, black, pink] = animalColors;

console.log(blackAndWhite); // Output: "black and white"
console.log(black);         // Output: "black"
console.log(pink);          // Output: "pink"


// 4. Use destructuring to assign appropriate variables using the color names.

//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructure all seven colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    // Output: "red"
console.log(orange); // Output: "orange"
console.log(yellow); // Output: "yellow"
console.log(green);  // Output: "green"
console.log(blue);   // Output: "blue"
console.log(indigo); // Output: "indigo"
console.log(violet); // Output: "violet"


// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructure while skipping indigo and violet
const [r, o, y, g, b] = colors.filter((color, index) => index < 5);

console.log(r); // Output: "red"
console.log(o); // Output: "orange"
console.log(y); // Output: "yellow"
console.log(g); // Output: "green"
console.log(b); // Output: "blue"

// If you want to specifically assign indigo separately:
const [, , , , , indg] = colors; // This assigns only indigo to indg
console.log(indg); // Output: "indigo"

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Assign only indigo using indg
//const [, , , , , indg] = colors; // This assigns only indigo to indg

console.log(indg); // Output: "indigo"


// 7. Use destructuring to assign all variables using the keys as the variable names


// Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); // Output: "Miss Piggy"
console.log(color);      // Output: "pink"
console.log(song);       // Output: "Never Before, Never Again"
console.log(job);        // Output: "Cast member of The Muppet Show"
console.log(partner);    // Output: "Kermit"


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


// Destructure songs and Kermit's details
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(song2);       // Output: "Moving Right Along"
console.log(song4);       // Output: "I Hope That Something Better Comes Along"
console.log(nestedJob);   // Output: "Host of The Muppet Show"
console.log(nestedPartner);// Output: "Miss Piggy"
