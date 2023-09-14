/*
switch(variable/expression){
    case value1:
        body of case 1
        break;
    case value2:
        body of case 2
        break;
    case value3:
        body of case 3
        break;
    case valuen:
        body of case n
        break;
    default:
        body of default
}
*/
// Days in a week
const Day = parseInt(prompt('Enter a number from 1 to 7 :'))
switch(Day){
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('Invalid input')
}

//Using multiple case
const dayName = prompt('Enter a day in a week')
switch(dayName){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Weekday')
        break;
    case 'Sunday':
    case 'Saturday':
        console.log('Weekend')
        break;
    default:
    console.log('Invalid input')
       
}

//Simple calculator
const number1 = parseInt(prompt('Enter first number'))
const operator = prompt('Enter a operator (+,-,*,/)')
const number2 = parseInt(prompt('Enter  second number'))

let result;
switch(operator){
    case '+' :
        result =number1 + number2
        break;
    case '-' :
        result =number1 - number2
        break;
    case '*' :
        result =number1 * number2
        break;
    case '/' :
        result =number1 / number2
        break;
    default:
        result = 'Invalid input'
}
console.log(result);


//Display month in a year using Switch statement
const month = parseInt(prompt('Enter a number from 1 to 12'));
let result1;
switch(month){
    case 1:
    result1 = 'January'
    break;
    case 2:
    result1 = 'Febuary'
    break;
    case 3:
    result1 = 'March'
    break;
    case 4:
    result1 = 'April'
    break;
    case 5:
    result1 = 'May'
    break;
    case 6:
    result1 = 'June'
    break;
    case 7:
    result1 = 'July'
    break;
    case 8:
    result1 = 'August'
    break;
    case 9:
    result1 = 'September'
    break;
    case 10:
    result1 = 'October'
    break;
    case 11:
    result1 = 'November'
    break;
    case 12:
    result1 = 'December'
    break;
    default:
        result1 = 'Invalid Input'

}
console.log('This month is ' + result1)