//1:
console.log("Задание 1:");

function greet(name) {
  return "Привет, " + name + ". Как у тебя дела сегодня?";
}

console.log(greet("Андрей"));
console.log(greet("Маша"));

console.log("-------------");
console.log(" ");
//=================

//2:
console.log("Задание 2:");

function isDigit(str) {
  const validNumberRegex = /^\s*[+-]?(\d(\.\d+)?|\.\d+){0,1}\s*$/;

  return validNumberRegex.test(str);
}

console.log(isDigit("2"));
console.log(isDigit("  7  "));
console.log(isDigit("-3.125"));
console.log(isDigit("3-8"));
console.log(isDigit("  6   5"));
console.log(isDigit("3 5"));
console.log(isDigit("ноль"));
console.log(isDigit("10"));

console.log("-------------");
console.log(" ");
//============

//3:
console.log("Задание 3:");

function opposite(number) {
  return -number;
}

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
console.log(opposite(-12525220.3325));
console.log(opposite(-5));

console.log("-------------");
console.log(" ");
//============

//4:
console.log("Задание 4:");

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
console.log(repeatStr(3, "*"));

console.log("-------------");
console.log(" ");
//============

//5:
console.log("Задание 5:");

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(29, 0));

console.log("-------------");
console.log(" ");
//============

//6:
console.log("Задание 6:");

// Решение задачи:

function isPalindrome(line) {
  line = String(line);

  const cleanedLine = line.toLowerCase().replace(/\s/g, "");

  return cleanedLine === cleanedLine.split("").reverse().join("");
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));
console.log(isPalindrome("."));
console.log(isPalindrome(".!."));

console.log("-------------");
console.log(" ");
//============

//7:
console.log("Задание 6:");

// Решение задачи:

function quarterOf(month) {
  return Math.ceil(month / 3);
}

// Проверка решения задачи:
console.log(quarterOf(3)); // вывод: 1
console.log(quarterOf(8)); // вывод: 3
console.log(quarterOf(11)); // вывод: 4

console.log("-------------");
console.log(" ");
//============

//8:
console.log("Задание 8:");

// Решение задачи:

function points(games) {
  // Инициализируем переменную для хранения общего количества очков
  let totalPoints = 0;

  // Проходим по каждому матчу в массиве
  for (let i = 0; i < games.length; i++) {
    // Разбиваем строку матча на счет нашей команды (x) и счет соперников (y)
    const [x, y] = games[i].split(":");

    // Преобразуем x и y в числа
    const ourScore = parseInt(x);
    const opponentScore = parseInt(y);

    // Применяем правила подсчета очков
    if (ourScore > opponentScore) {
      totalPoints += 3; // Победа
    } else if (ourScore === opponentScore) {
      totalPoints += 1; // Ничья
    }
    // В случае поражения ничего не добавляем, так как по умолчанию totalPoints = 0
  }

  // Возвращаем общее количество очков
  return totalPoints;
}

// Проверка решения задачи:
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // вывод: 30
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
); // вывод: 10
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // вывод: 0
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // вывод: 15
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
); // вывод: 12

console.log("-------------");
console.log(" ");
//============

//9:
console.log("Задание 9:");

// Решение задачи:
function sumOfDifferences(arr) {
    // Сортируем массив в порядке убывания
    const sortedArr = arr.sort((a, b) => b - a);
  
    // Инициализируем переменную для хранения суммы различий
    let sum = 0;
  
    // Проходим по массиву и суммируем различия между последовательными парами
    for (let i = 0; i < sortedArr.length - 1; i++) {
      sum += sortedArr[i] - sortedArr[i + 1];
    }
  
    return sum;
  }
  
  // Проверка решения задачи:
  console.log(sumOfDifferences([1, 2, 10])); // вывод: 9
  console.log(sumOfDifferences([-3, -2, -1])); // вывод: 2
  
  console.log("-------------");
  console.log(" ");
  //============
  
  //10:
  console.log("Задание 10:");
  
  // Решение задачи:
  
  function countSheep(num) {
    let result = "";
  
    for (let i = 1; i <= num; i++) {
      result += ${i} овца${i === num ? "..." : ", "};
    }
  
    return result;
  }
  
  // Проверка решения задачи:
  console.log(countSheep(0)); // вывод: ""
  console.log(countSheep(1)); // вывод: "1 овца..."
  console.log(countSheep(2)); // вывод: "1 овца, 2 овцы..."
  console.log(countSheep(3)); // вывод: "1 овца, 2 овцы, 3 овцы..."
  
  console.log("-------------");
  console.log(" ");
  //============