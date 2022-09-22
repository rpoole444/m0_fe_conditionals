// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// This if statement has variable doorChoice asking if it equals 1. this is a boolean/ true/false question. If 1 then it will choose "hat", ifelse, it will choose scarf.

// 2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing because of the 2 possible variable values of my editted "hat" and "scarf"

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//value would be scarf because it would jump to the else if statement since the value didn't equal 1, as agreed upon earlier in the code.

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//these lines are code for each action from the previous choices provided in 21-23 lines. It starts with an IF statement that has a variable bearChoice asking if the value is 1, and providing a console for if the value is 1. the there are two attached else if statments with variables ==='ing' 2 and 3 which both organizes the actions, and gives clear direction for each possible outcome of the story.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//"You run as fast as you can into the next room. It's full of snakes!"

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// you tell the bear the hat is too small and he cries.
// 7. What is your favorite ending?
// I love the snake ending, not what I expected!
