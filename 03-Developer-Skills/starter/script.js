// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x === 23) log(test);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1988));

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function(temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let index = 0; index < temps.length; index++) {
//     if (temps[index] !== "number") continue;
//     if (temps[index] > max) max = temps[index];
//     if (temps[index] > max) max = temps[index];
//   }
//   console.log(max, min);
//   //Amplitude -> difference between highest and biggest number
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
/*
const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [30, 12, -2, -10, "error", 11, 13, 25, 27, 30, 33, 40];

const calcTempAmplitudeNew = function(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    if (typeof temps[index] !== "number") continue;
    if (temps[index] > max) max = temps[index];
    if (temps[index] > max) max = temps[index];
  }
  console.log(max, min);
  //Amplitude -> difference between highest and biggest number
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temp1, temp2);
console.log(amplitudeNew);
*/

const measureKelvin = function() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //Fix the bug
    value: Number(prompt("Degrees celsius"))
    // value: 10
  };
  //Find the bug
  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//Identify the bug
console.log(measureKelvin());

const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [30, 12, -2, -10, "error", 11, 13, 25, 27, 30, 33, 40];

const calcTempAmplitudeBug = function(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // let max = temps[0];
  let max = temps[0];
  let min = temps[0];
  // let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    if (typeof temps[index] !== "number") continue;

    debugger;
    if (temps[index] > max) max = temps[index];
    if (temps[index] > max) max = temps[index];
  }
  console.log(max, min);
  //Amplitude -> difference between highest and biggest number
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// const amplitudeBug = calcTempAmplitudeBug([temp1, temp2]);

//Identify
console.log(amplitudeBug);
