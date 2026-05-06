let textArray = ["Faith","Rebirth", "Death", "He has a plan",  "...", "2024", "Endure", "I hate them, mom!", "Failed", "Where were you?"]
let textArray2 = ["Where is he?", "Why", "", 'High-School', "Japan", "17", "Slavery", "1945", "2007", "I'm sorry", "Groped"]
let textArray3 = ["Why do I have to experience this?", "Occult?", "Why doesn't this work?",  "'Fuck you'", "Why did you leave me?"]
// let textArray3 = ["Discussions","Facilitator", "Learner", "Ambient Conditions", 'Content', "Strategy", ""]


let textArray4 = [ '"I AM"', 'Morals', 'Forgiveness', "Where is he?", "Cycles", "Systems", "'Fuck you, Ami'Yah'", "Why doesn't the pain go away", "246 years", "WHY", "If I die?" ]

let textArray5 = ["Power", "Teacher", "Student", 'Test', "Grades", "Morals", "Dynamics", "Empathy", "Status", "Privilege", "Justice", "Equity", "Inequity", "Systemic", "Oppression", "Liberation", "Activism", "Allyship", "Intersectionality", "Microaggressions", "Bias", "Stereotypes", "Discrimination", "Inclusion", "Diversity", "Representation", "Voice", "Agency", "Resistance", "Solidarity", "Community", "Change"]

let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let colorArray = ['rgb(255, 0, 0)', 'rgb(229, 255, 0)', 'rgb(208, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 255)'];
let fontArray = ['Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana'];
let colorArray3 = ['rgb(0, 255, 102)', 'rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 255)',];
let colorArray4 = ['rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(43, 255, 1)', 'rgb(255, 255, 255)', 'rgb(0, 255, 76)'];
let gothicfontArray = ['Blackletter', 'Fraktur', 'Gothic', 'Old English Text MT', 'Cloister Black'];

let randomsmoothSpeed = 0.01; // Adjust this value to control the speed of the noise-based changes

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-text-canvas");  // attach p5 to the HTML canvas
  canvas.position(0, 0);        // make sure it aligns with Hydra
}


function draw() {
//   background(0); // white background
// let responsiveScale = min(windowWidth, windowHeight) / 700; // Scale based on screen size
  clear(); // transparent background
  textSize(43); // dynamic text size based on noise
  fill(colorArray[Math.floor(index2) % colorArray.length]); // dark text, adjust as needed
  // why do we use math.floor? because we want to get an integer index for the array, 
  // and noise returns a float between 0 and 1,
  //  so we multiply it by the length of the array to get a range that covers all indices,
  //  and then use math.floor to round it down to the nearest whole number.
  // text(textArray[Math.floor(index)], windowWidth * 0.45, windowHeight / 4);
  // text(textArray2[Math.floor(index2)], windowWidth * 0.45, windowHeight / 4);
  index2 = noise(index) * textArray2.length; // Use noise to create a more organic change in index2
  index = index + 0.008;
  fill(colorArray[Math.floor(index) % colorArray.length]); // light text, adjust as needed
   text(textArray[Math.floor(index) % textArray.length], windowWidth * 0.2, windowHeight / 2.9);
   //floor means round down to the nearest whole number, 
   // so it ensures that we get a valid index for the textArray.
  textSize(43); // responsive text size
  text(textArray2[Math.floor(index2)], windowWidth * 0.2, windowHeight / 2.5);
  textFont(gothicfontArray[Math.floor(index) % gothicfontArray.length]);
  fill(colorArray3[Math.floor(index3) % colorArray3.length]);
  text(textArray4[Math.floor(index2)], windowWidth * 0.01, windowHeight / 2.1);
  index3 = index + 0.080;
  index4 = index + 0.060;
  fill(colorArray4[Math.floor(index4) % colorArray4.length]);
  // Position textArray4 in the middle on the right hand side
  // To adjust positioning: change windowWidth * 0.75 to move left/right (0 = left edge, 1 = right edge)
  // Change windowHeight / 2 to move up/down (0 = top, windowHeight = bottom)
  textSize(43); // responsive text size
  textFont(gothicfontArray[Math.floor(index4) % gothicfontArray.length]);
  text(textArray4[Math.floor(index4)], windowWidth * 0.01, windowHeight / 1.5);
  // Display textArray3 spread across the background
  // for (let i = 0; i < textArray3.length; i++) {
  //   fill(colorArray3[Math.floor(index3 + i) % colorArray3.length]);
  //   textSize((noise(5 + i * 10) * .50 + 20) * responsiveScale); // responsive text size
  //   text(textArray2[(Math.floor(index3) + i) % textArray2.length],
  //        (windowWidth / textArray2.length) * i + windowWidth / 20, 
  //        noise(index + i * 0.05) * windowHeight * 0.08 + windowHeight * 0.01);
  // }
  textSize(35); // responsive text size
      textFont(gothicfontArray[Math.floor(index4) % gothicfontArray.length]);
  text(textArray3[Math.floor(index2)], windowWidth * 0.01, windowHeight / 1.7);

}