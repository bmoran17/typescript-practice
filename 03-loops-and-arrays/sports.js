var sportsOne = ["Skating", "Snowboarding", "Running", "Football"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Football") {
        console.log(tempSport + " is my favorite sport!!");
    }
    else {
        console.log(tempSport);
    }
}
