// var x = 0;
// This is the starting point for the loop

// x < topics.length
// if x is less than the length of the array (condition)

// x++
// iterate over each item by increasing by 1 each time

var topics = ["HTML", "CSS", "Git", "JavaScript"];
//get a random topic
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
// list all available topics by iterating through array
function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}
// print a message based on output of randomTopic
function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics I am learning!");
listTopics();
console.log("Which topic should we study first?");
selectTopic();

// start at index 0. As long as i is less than the length of the array,
// continue through the array and console.log out each item at each index

// function makeTea() {
//   if (waterTemp >= 212) {
// getTeaBag();
//   } else {
//     boilWater();
//   }
// }
// function boilWater() {
//   for (var i = 0; i < 212; i++) {
//     console.log("Water is heating up... Please wait.");
//   }
// }
// function getTeaBag() {
// const teas = ["Green", "Black", "Jasmine", "Decaf"];
// const teas.random = teas[Math.floor(Math.random() * teas.length)];
// teaChoice = teas.random;
// steepTea(teaChoice);
//}
// function steepTea() {
//   const steepTime = [3, 5, 3, 5];
//   if (tea.random = "Green") {
//     console.log("Steeping tea for " + steepTime[0] + "minutes."
//   }
//readyMessage(() => { console.log("Your tea is ready! Pour and enjoy!"); }, steepTime);
// }
