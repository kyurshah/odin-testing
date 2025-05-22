function sum(a, b) {
  return a + b;
}

function capitalise(a) {
  return a[0].toUpperCase() + a.slice(1).toLowerCase();
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

function calculator() {
  // Create a calculator function
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
  };
}

function caesarCipher(sentence, wordShift) {
//Caesar Cipher which shifts words by a certain amount
  let result = "";
  for (let i = 0; i < sentence.length; i++) {

    if (sentence.codePointAt(i) >= 65 && sentence.codePointAt(i) <= 90) {
       result += String.fromCharCode(((sentence.codePointAt(i) + wordShift - 65) % 26) + 65);
    }
    else if (sentence.codePointAt(i) >= 97 && sentence.codePointAt(i) <= 122) {
      result += String.fromCharCode(((sentence.codePointAt(i) + wordShift - 97) % 26) + 97);
    }
    else {
      result += sentence[i];
    }
  }
  return result;

}

function analyzeArray(numberArray) {
  // properties - average, min, max, and length
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }

  return {
    "average": sum / numberArray.length ,
    "min": Math.min(...numberArray),
    "max": Math.max(...numberArray),
    "length": numberArray.length,
  }
}

module.exports = {
  sum,
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
