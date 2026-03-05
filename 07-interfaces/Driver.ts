import { Coach } from "./Coach";
import { SwimmingCoach } from "./SwimmingCoach";
import { TennisCoach } from "./TennisCoach";

let mySwimmingCoach = new SwimmingCoach;
let myTennisCoach = new TennisCoach;

// declare empty array of coaches
let coaches: Coach[] = [];

// add coaches to array
coaches.push(mySwimmingCoach);
coaches.push(myTennisCoach);

for (let tempCoach of coaches) {
  console.log(tempCoach.getDailyWorkout());
}
