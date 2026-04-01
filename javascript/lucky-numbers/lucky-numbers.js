// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));

  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversedValue = "";
  const strValue = String(value);

  for (let i = strValue.length - 1; i >= 0; i--) {
    reversedValue += strValue[i];
  }

  return reversedValue === strValue;

  /**
   * ALTERNATIVELY
   *
   * // 1. Split into array: "121" -> ["1", "2", "1"]
  // 2. Reverse array: ["1", "2", "1"] -> ["1", "2", "1"]
  // 3. Join back to string: ["1", "2", "1"] -> "121"
  const reversedValue = strValue.split('').reverse().join('');
  */
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  //1. Check for truly empty values (null, undefined, "")
  if (!input) return "Required field";
  console.log(typeof input);

  if (typeof input === "string" || input !== 0)
    return "Must be a number besides 0";

  return "";
}
