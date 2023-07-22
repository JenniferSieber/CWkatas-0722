// 6kyu, 7kyu, 8kyu
// KATA 1 6kyu
// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
const groupByCommas = n => n.toLocaleString();

console.log(groupByCommas(1));
console.log(groupByCommas(35235235));

// KATA 2 7kyu
//https://www.codewars.com/kata/589d1e88e8afb7a85e00004e/train/javascript 
function numberIncreasing(n) {
  return !!(n % 5 && ![2,4,7,12,17,22].includes(n));
}

console.log(numberIncreasing(3));
console.log(numberIncreasing(4));
console.log(numberIncreasing(226));

// KATA 3 7kyu
// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
const isLeapYear = (year) => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

console.log(isLeapYear(2100));
console.log(isLeapYear(2015));
console.log(isLeapYear(2020));

// KATA 4 7kyu
// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7
const unscrambleEggs = word => word.split('egg').join('');

console.log(unscrambleEggs("ceggodegge heggeregge"));
console.log(unscrambleEggs("FeggUNegg KeggATeggA"));

// KATA 5 6kyu
// https://www.codewars.com/kata/5443b8857fc4473cb90008e4/train/javascript
function unusualSort(arrayOfChars) {
  function score(c) {
    c = String(c).charCodeAt(0);
    return c >= 48 && c <= 57 ? c + 75 : c;
  }
  
  return arrayOfChars.sort(function(a, b) {
    var diff = score(a) - score(b);
    return diff ? diff : typeof a == 'number' ? -1 : 1;
  });
}

console.log(unusualSort(["0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9"]));
console.log(unusualSort(["a","b","c","X","Y","Z","0","5","9"]));
console.log(unusualSort([3,"2",1,"a","c","b"]));
console.log(unusualSort([3, 2, 1, "a","z","b"]));
console.log(unusualSort(["Z","a","1"]));

