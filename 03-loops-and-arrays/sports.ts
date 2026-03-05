let sportsOne: string [] = ["Skating", "Snowboarding", "Running", "Football"];

for (let i = 0; i < sportsOne.length; i ++) {
  console.log(sportsOne[i]);
}

// simplified for loop
for (let tempSport of sportsOne) {
  if (tempSport == "Football") {
    console.log(tempSport + " is my favorite sport!!")
  } else {
    console.log(tempSport);
  }
}