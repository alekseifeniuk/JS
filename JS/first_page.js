'use strict';

// let browserType = prompt( "You browser is?", "type here" );
// if (browserType === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (
//     browserType === "Chrome" 
//     || browserType === "Firefox"
//     || browserType === "Safari"
//     || browserType === "Opera"
// ) {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// let value = +prompt("Введите число между 0 и 3:", "");
// switch (value) {
//     case 0:
//         alert( "Вы ввели число 0!" )
//         break;

//     case 1:
//         alert( "Вы ввели число 1!" );
//         break;

//     case 2:
//     case 3:
//         alert( "Вы ввели число 2 или 3!" );
//         break;
    
//     default:
//         alert( "Посмотри получше!" );
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm( "А родители разрешили?" );
//     return (age > 18) || confirm( "Родители разрешили?" );
// }

// function minValue(a, b) {
//     return (a > b) ?  b : a;
// }
// alert( minValue(3, 2) )

// function pow(x, n) {
//     return x ** n;
// }

// let value = +prompt( "Enter a value:", "value" );
// let degree = +prompt( "Enter a degree:", "degree");

// if (value >= 1 && value % 2 == 0) {
//     alert( pow(value, degree) );
// } else {
//     alert( `Число ${value} не поддерживается!` );
// }

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
    "Вы согласны?",
    () => alert( "Вы согласились." ),
    () => alert( "Вы отменили выполнение." )
  );
