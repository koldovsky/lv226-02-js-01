// var greetings = 'Hello World!';
// alert(greetings);
// document.write(greetings);
// console.log(greetings);


// var userName = prompt('Your name:');
// var greetings = 'Hello ' + userName;
// document.write(greetings);
// document.write('<br>');

// var userAge = Number(prompt('Your age:'));
// var nextAge = userAge + 1;
// document.write('Soon you will be ' + nextAge);

// function sum(a, b, c) {
//     var result = a + b + c;
//     return result;
// }

// // var num1 = Number(prompt('Num1'));
// // var num2 = Number(prompt('Num2'));
// var calc = sum(1, 2, 3);
// document.write(calc);

function tellAge(age) {
    if (age < 18) {
        return 'Kid';
    } else {
        return 'Adult';
    }
}

var age = Number(prompt('Your age'));
document.write(tellAge(age));

var result = Math.sqrt(16);
document.write(result);