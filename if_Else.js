// if statement
/*
if(condition){
    //body
}

*/
const marks = 55   //parseInt(prompt("enter your score"))
if(marks >= 50 ){
    console.log("You are Pass")
    console.log("congratulation")

}
if(marks < 50){
    console.log('Sorry , You are fail')
}

//ifElse
/*
if(condition){
    //body
}
else{
    //body
}
*/

const mark = -10  // parseInt(prompt('Enter your marks'));
if(mark >= 50){
    console.log('you are passed')
}
else{
    console.log('you are fail')
}


//else if statement
/*
if(condition){
    //statement1
}
else if(condition2){
    //statement2
}
else{
    //statement3
}
*/


const  score = 110  // parseInt(prompt('Enter your marks'))
if(score >100){
    console.log('Score is invalid')
}
else if(score<0){
console.log('Score is invalid')
}
else if(score >=50){
    console.log('You are pass')
}
else{
    console.log('You are fail')
}




const  scores = 34   //parseInt(prompt('Enter your marks'))
if(score >100 || score < 0){
    console.log('Score is invalid')
}
else if(score >=50){
    console.log('You are pass')
}
else{
    console.log('You are fail')
}

//To check weather number is positive negstivr or zero
const number = parseInt(prompt('Enter a number'))
if(number > 0){
    console.log('Number is positive')
}
else if(number < 0){
    console.log('Number is negative')
}
else{
    console.log('Number is 0')
}

