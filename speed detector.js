
// let result1 and let result2 is first part of function so that the variables are defined
// function should do speed - 70 and assign this to variable called result if result <= 0 then 'Ok' is printed
// else if(result1 % 5 = 0) function should do result1 / 5 and assign this expression to a variable called result2
//  result2 must be console.loged with the string so: `You just got ${result2} demerit points
// However what about numbers like 86 these kind of speeds don't have a remainder of 0 when divided by 5
// to sort this problem out I have used and else if statement for (result2 % 5) !== 0
// there are two stuations one the number has a remainder less that 5 and in that case it should give a warning of you almost got a demerit point
// the second is the remainder is greater than 5 and in that case the person should get atleat 1 demerit
// I have catered for these by using the round argument

function speedDetective(speed){
    let result1
    let result2
   result1 = Math.round(speed)
    result2 = result1 - 70
    if(result2 <= 0){
        console.log('Ok')
    }else if((result2 % 5) === 0){
       result3 = result2 / 5
       if(result3 > 12 ){
        console.log('lisence suspended')
       }
       else{console.log(`You just got ${result3} demerit points`)}

    }
}


