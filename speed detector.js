
// To begin with I have made sure that all speed inputs must be rounded using Math.round()
// a person only starts to have a chance of getting demerit points when they exeed 70kph, thus I have defined result2 (speed - 70) [Line 23]
// if result1 is <=0 the result is 'Ok'
//  I have dealt with the speed inputs sepereately, by that what I mean is values is because the threre are 5km by 5km demerit points to be given
// there are some inputs that are like 86 or 72 where the which are not divisible by 5, these can be rounded using Math.round (refference line 36 to 44). 
// then after rounding these values we can  deal with them directly.
// The ones that are divisible by 5 are dealit with automatically (reffernce line 26 to 34). IE: I HAVE CHECKED FOR DIVISABILITY USING (RESULT2 % 5) SHOULD = 0 AND NOT = 0 IF NOT DIVISIBLE. THEN AFTER THIS I ROUND OR DON'T ROUN DEPENDING ON THE DIVIDIBLITY.
// when I have this the result is the demerit points, which I have called result3 for the divisable values and result4 for the non divisable ones.
// I have included in my code that these results (result3 and result4) have to be less than 12 or else the lisence is suspended. 
// by doing this i HAVE taken care of values like 87, 92 (numbers not divisable 5) 90,80 (numbers disable by 5) and also numbers like 98.890 being added as speed inputs.

function speedDetective(speed){
    let result1
    let result2
    let result3
    let result4
   result1 = Math.round(speed)
    result2 = result1 - 70
    if(result2 <= 0){
        console.log('Ok')
    }else if((result2 % 5) === 0){
       result3 = result2 / 5
       if(result3 > 12 ){
        console.log('lisence suspended')
       }else{
           console.log(`you got ${result3} demerit points`)
       }
       

    }else if((result2 % 5) !== 0){
     result3 = result2 / 5
     result4 = Math.round(result3)
     if(result4 >= 0 && result4 <= 12){
         console.log(`you got ${result4} demerit points`)
     }else if(result4 > 12){
         console.log('lisence suspended')
     }
  }


}

// Below are tests for my code:

speedDetective(72)
speedDetective(81)
speedDetective(101)
speedDetective(98)
speedDetective(150)

