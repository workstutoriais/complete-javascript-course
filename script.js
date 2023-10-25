"use strict";

const x = "23";

if (x == 23) console.log(23);

const calcage = (birthYear) => 2023 - birthYear;

console.log(x);

//problem:
/*
We work for a company building a smart home thermoter. Our most recent task
 is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
 Keep in mind that sometimes there might be an sensor error. "
*/
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-12, "error", 9, 13, 38];

// 1)understanding the problem
//What is temp amplitude? Answer: difference between highst and lowest temp
// - how to compute max and min temperature?
//What's a sensor error? And what to do?

//2) Breaking up into sub-problems
// - How to ignore the errors?
// Find max value in temp array
// find the min value in temp array
// - subtract min from max(amplitude) and then return it

const calcTempAmplitude = function (temps = []) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      console.log(temps[i]);
      continue;
    } else if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(`The Max temp is: ${max} and the min temp is ${min}`);
  min = Math.abs(min);
  let amplitude = max - min;
  console.log(`The temperature amplitude is:  ${amplitude}`);
  return amplitude;
};

console.log(calcTempAmplitude(temperatures));

const calcTempAmplitudeNew = function (temps = [], temps2 = []) {
  const mergedArrays = temps.concat(temps2);

  let max = mergedArrays[0];
  let min = mergedArrays[0];

  for (let i = 0; i < mergedArrays.length; i++) {
    if (typeof mergedArrays[i] !== "number") {
      console.log(mergedArrays[i]);
      continue;
    } else if (mergedArrays[i] > max) {
      max = mergedArrays[i];
    } else if (mergedArrays[i] < min) {
      min = mergedArrays[i];
    }
  }
  console.log(`The Max temp is: ${max} and the min temp is ${min}`);
  min = Math.abs(min);
  let amplitude = max - min;
  console.log(`The temperature amplitude is:  ${amplitude}`);
  return amplitude;
};

console.log(calcTempAmplitudeNew(temperatures, temperatures2));
