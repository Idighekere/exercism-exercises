// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalNumberOfBirds = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    totalNumberOfBirds += birdsPerDay[i];
    // console.log(totalNumberOfBirds, birdsPerDay);
  }
  return totalNumberOfBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startIndex = 7 * week - 7;
  const endIndex = startIndex + 7;
  let total = 0;
  console.log(startIndex, endIndex, birdsPerDay);
  // const birdsForAWeek = birdsPerDay.slice(startIndex, endIndex);
  //
  for (let i = startIndex; i < endIndex; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let fixedCount = birdsPerDay;
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    fixedCount[i] += 1;
  }
}
