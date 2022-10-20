//1
//let i = 3;
//while (i) {  //Останнім виведе 1. Тому, що 0 вже буде хибним.
// alert(i--);
//}

//2
//let A = 1;
//let B = 2;
//let C = 3;

//if (A < B && A < C && B > A && B < C) {
//  A *= 2;
//  B *= 2;
//  C *= 2;
//  console.log(A);
//  console.log(B);
//  console.log(C);
//} else {
//  A *= -1;
//  B *= -1;
//  C *= -1;
//  console.log(A);
//  console.log(B);
//  console.log(C);
//}

//3
//let A = 1;
//let B = 2;
//let C = 3;

//if (A < B && A < C && B > A && B < C || C < B && C < A && B > C && B < A) {
//  A *= 2;
//  B *= 2;
//  C *= 2;
//  console.log(A);
//  console.log(B);
//  console.log(C);
//} else {
//  A *= -1;
//  B *= -1;
//  C *= -1;
//  console.log(A);
//  console.log(B);
//  console.log(C);
//}

//4
//let A = 1;
//let B = 10;
//let C = 15;

//let distanceAB = B - A;
//let distanceAC = C - A;

//if (distanceAB < distanceAC) {
//  console.log(`Відстань A-B: ${distanceAB}`);
//} else if (distanceAB > distanceAC) {
//  console.log(`Відстань A-C: ${distanceAC}`);
//} else {
//  console.log('Відстань рівна!')
//}

//5
//let coordinateX = 5;
//let coordinateY = 5;

//if (coordinateX === 0 && coordinateY === 0) {
//  console.log(0);
//} else if (coordinateX === 0) {
//  console.log('2');
//} else if (coordinateY === 0) {
//  console.log('1');
//} else {
//  console.log('3');
//}

//6
//let coordinateX = -5;
//let coordinateY = 0;

//if (coordinateX > 0 && coordinateY > 0) {
//  console.log(`quarter: 1`);
//} else if (coordinateX > 0 && coordinateY < 0) {
//  console.log(`quarter: 2`);
//} else if (coordinateX < 0 && coordinateY < 0) {
//  console.log(`quarter: 3`);
//} else if (coordinateX < 0 && coordinateY > 0) {
//  console.log(`quarter: 4`);
//} else {
//  console.log('Введіть коректні дані!');
//}



//7 
//let pointA_X = 2;
//let pointA_Y = 5;

//let pointB_X = 7;
//let pointB_Y = 5;

//let pointC_X = 7;
//let pointC_Y = 3;

//let pointD_X; //?
//let pointD_Y; //?

//if (pointA_X === pointB_X) {
//  pointD_X = pointC_X;
//} else if (pointA_X === pointC_X) {
//  pointD_X = pointB_X;
//} else {
//  pointD_X = pointA_X;
//}

//if (pointA_Y === pointB_Y) {
//  pointD_Y = pointC_Y;
//} else if (pointA_Y === pointC_Y) {
//  pointD_Y = pointB_Y;
//} else {
//  pointD_Y = pointA_Y;
//}

//console.log(`Координати четвертої вершини: x:${pointD_X}, y:${pointD_Y}!`);



//8
//let numYear = +prompt('Введіть номер року.');

//if (numYear % 4 === 0 && numYear % 100 != 0 || numYear % 400 === 0) {
//  alert('Це не високосний рік, він включає в себе 365 днів.');
//} else {
//  alert('Це високосний рік, він включає в себе 366 днів.');
//} 


//9
//let = num = -3;

//if (num === 0) {
//  alert('нульове число')
//} else if (num > 0 && num % 2 === 0) {
//  alert('позитивне і парне');
//} else if (num < 0 && num % 2 === 0) {
//  alert('негативне і парне');
//} else if (num > 0 && num % 2 != 0) {
//  alert('позитивне непарне');
//} else if (num < 0 && num % 2 != 0) {
//  alert('негативне непарне')
//}

////10
//let num = 999;

//if (num % 2 === 0 && num < 10 && num > 0) {
//  alert('парне однозначне');
//} else if (num % 2 != 0 && num < 10 && num > 0) {
//  alert('непарне однозначне');
//} else if (num % 2 === 0 && num > 9 && num < 100) {
//  alert('парне двозначне');
//} else if (num % 2 != 0 && num > 9 && num < 100) {
//  alert('непарне двозначне');
//} else if (num % 2 === 0 && num > 99 && num < 1000) {
//  alert('парне тризначне');
//} else if (num % 2 != 0 && num > 99 && num < 1000) {
//  alert('непарне тризначне');
//}

//11
//let i = 0;
//while (++i < 5) alert(i); //Виведе 1, 2, 3, 4.

//let i = 0;
//while (i++ < 5) alert(i); //Виведе 1, 2, 3, 4, 5.

//Ні не однакові. Тому що префіксна форма повертає нове значення, а постфіксна стране.

//12
//for (let i = 0; i < 5; i++) alert(i); //Виведе 0, 1, 2, 3, 4.

//for (let i = 0; i < 5; ++i) alert(i); //Виведе 0, 1, 2, 3, 4.

//Так, однакові. Тому, що лічильник виконується вже після виконання тіла цикла для for немає різниці.

//13
//for (let i = 2; i <= 10; i++) {
//  if (i % 2 === 0) {
//    alert(i);
//  }
//}

//14
//let i = 0;

//while (i < 3) {
//  alert( `number ${i}!` );
//  i++;
//}

//15
//let num = 0;
//while (num <= 100) {
//  num = prompt('Введіть число більше 100!');
//  if (num === null) break;
//}

//16
//let n = 10;

//nextPrime:
//for (let i = 2; i <= n; i++) { 

//  for (let j = 2; j < i; j++) { 
//    if (i % j == 0) continue nextPrime; 
//  }

//  alert( i ); 
//}


//17
//let sum = 0;
//let i = 0;
//while (++i < 3) {
//  sum += +prompt('Введіть число');
//}
//alert(`Середнє арефметичне ваших двох чисел: ${sum / 2}!`) 

//18
//let num = +prompt('Введіть число');
//let result = Math.pow(num, 2);
//alert(`Ваше число у квадраті: ${result}`);

//19
//let numbers = {};

//numbers.num1 = +prompt('Введіть пеше число');
//numbers.num2 = +prompt('Введіть друге число');
//numbers.num3 = +prompt('Введіть третє число');

//alert(`Різниця більшого та меньшого числа: ${Math.max(numbers.num1, numbers.num2, numbers.num3) - Math.min(numbers.num1, numbers.num2, numbers.num3)}!`);

//20
//let num = +prompt(`Введіть число`);

//if (num % 2 === 0) {
//  alert('Це парне число!')
//} else {
//  alert('Це непарне число!')
//}

//21
//let a = prompt('Введіть число меньше 100');
//let sum = 0;
//let amount = 0;

//if (a < 100) {
//  for (let i = 0; i < a.length; i++) {
//    sum += Number(a[i]);
//    amount++;
//  }
//console.log(`Сума цифр числа: ${sum}`);
//console.log(`Кількість цифр: ${amount}`);
//} else {
//  alert('Не коректне число')
//}



//22
//let inch = +prompt('Введіть дюйми, щоб перевести у сантиметри. Або скасуйте для зворотньої операції.');

//if (inch > 0 || inch < 0) {
//  inch *= 2.54;
//  alert(`${inch} сантиметри(ів)!`);
//}

//let centim = +prompt('Введіть сантиметри, щоб перевести у дюйми.');

//if (typeof centim === 'number') {
//  centim /= 2.54;
//  alert(`${centim.toFixed(2)} дюйми(ів)!`);
//} else {
//  alert('Не коректне значення')
//}


//let centim = +prompt('Введіть сантиметри, щоб перевести у дюйми.');


//23
//let question_1; 
//let question_2; 
//let question_3; 
//let question_4;
//let question_5 

//let start = prompt('Якщо готові - напишить слово "Старт"');

//if (start === 'Старт') {
//  question_1 = +prompt('Що з цього не є косметичним засобом: 1) Помада. 2) Тату. 3) Крем. 4) Пудра? Введіть номер правильної відповіді.'); //2
//  if (question_1 === 2) {
//    alert('Ви заробили 100грн!');
//    question_2 = +prompt('Кто з`їв колобка: 1) Дід. 2) Бабка. 3) Заяць. 4) Лисиця? Введіть номер правильної відповіді.'); //4
//    if (question_2 === 4) {
//      alert('Ви заробили 500грн!');
//      question_3 = +prompt('Якої шахової фігури не існує: 1) Пішка. 2) Кінь. 3) Дама. 4) Король? Введіть номер правильної відповіді.'); //3
//      if (question_3 === 3) {
//        alert('Ви заробили 1000грн!');
//        question_4 = +prompt('Про яку сім`ю йдеться у романі "Жовтий князь": 1) Катранників. 2) Голощапових 3) Анциборів 4) Тищенків? Введіть номер правильної відповіді.'); //1
//        if (question_4 === 1) {
//          alert('Ви заробили 2000грн!');
//          question_5 = +prompt('У склад будьякої оргаічної речовини входить: 1) Кисень. 2) Вуглець. 3) Водень. 4) Азот? Введіть номер правильної відповіді.'); //2
//          if (question_5 === 2) {
//            alert('Ви заробили 1000000грн! Вітаю, можешь увімкнути музику з "Форт Боаярд")))');
//          } else { alert('Не вірна відповідь!) Не засмучуйся, я і сам не знаю...') };
//        } else { alert('Не вірна відповідь!) Не засмучуйся, я і сам не знаю...') };
//      } else { alert('Не вірна відповідь!) Не засмучуйся, я і сам не знаю...') };
//    } else { alert('Не вірна відповідь!) Не засмучуйся, я і сам не знаю...') };
//  } else { alert('Не вірна відповідь!) Не засмучуйся, я і сам не знаю...') };
//}



//24
//let a = prompt('Введіть трицифрове число');
//let sum = 0;
//let mult = 1;

//if (a < 1000 && a > 99 && a % 2 === 0) {
//  for (let i = 0; i < a.length; i++) {
//    sum += Number(a[i]);
//  }
//  console.log(`Сума цифр числа: ${sum}`);
//}

//if (a < 1000 && a > 99 && a % 2 != 0) {
//  for (let i = 0; i < a.length; i++) {
//    mult *= Number(a[i]);
//  }
//  console.log(`Добуток цифр числа: ${mult}`);
//} else {
//  alert('Я ж просив тризначне!')
//}


//25
//let a = prompt(`Cторона трикутника A`);
//let b = prompt(`Cторона трикутника B`);
//let c = prompt(`Cторона трикутника C`);

//if (a > 0 && b > 0 && c > 0) {
//  if (a + b > c && a + c > b && b + c > a) {
//    alert('Трикутник має право на життя');
//  } else ('Такого трикутника не буває');
//} else ('Введіть коректні дані');


//26
//let pointA_X = 4;
//let pointA_Y = 9;
//let circle_R = 10;

//let hypotenuse = Math.sqrt(pointA_X ** 2 + pointA_Y ** 2);

//if (hypotenuse <= circle_R) {
//  console.log('Точка лежить в середині кола');
//} else {
//  console.log('Точка не лежить в серередині кола');
//}


//27
//let user = {};

//user.name = 'John'
//user.surname = 'Smith'
//user.name = 'Pete'
//delete user.name;

//console.log(user);

//28
//const user = {
//  name: "John"
//  };
//  user.name = "Pete"; // Так, працюватиме. Якщо змінною назначен об'єкт або масив то їх можна змінювати.

//  console.log (user)

//29
//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
//  }

//  let sum = 0;

//  for (let i of Object.values(salaries)) {
//    sum += i;
//  }
//  console.log(sum);

//30
//let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
//    }

//    function multiplyNumeric(obj) {
//      for (let key in obj) {
//        if (typeof obj[key] == 'number') {
//          obj[key] *= 2;
//        }
//      }
//    }

//    multiplyNumeric(salaries);

//    console.log(salaries)

    























