// this is a function that takes in 4 arguments.
// the salary inputed is reduced accoding to the other 3 arguments.
// nhif is the argument tht is shows how much a person is contributing to nhif
// nssf is just like nhif exept now the the money goes to nssf and not nhif
// I have declared all the variables uesed for my code (refference line 27 to to line 38)
    // the main dedeucter of the salary is tax (for example line 69 the tax is the (salary * 0.1)) (reference is the follwing lines
    // 71,81,94,104,117,127,139,149,162,172) all of these have been done in accordance to the persons gross salary.
    // Tax can be split into groups based on the salary:
    // 1) salaries below 24000 (refference line 42 to line 64)
    // 2) salaries =  24000 (refference line 64 to 87 )
    // 3) salaries greater than 24000 and less than 32333 (refference line 87 to 110)
    // 4) salaries greater than 32333 and less than 500000 (refference line 110 to 132)
    // 5) salaries grester than 500000 and less than 800000 (refference line 132 to 155)
    // 6) salaries greater than 800000 (refference line 155 to line 178 )
    // throughout my code there is a statement that checks the salary range and then the statement that checks the tier.
    // tier one means a person can only contrinute a maximum of 6000 to NHIF. Tier two means a person can contribute  a maximum of 18000 to NHIF.
    // For both tiers a person can contribute a maximum of 400 to NSSF
    // please not I have used the new rates for NHIF provided on the webpage link we were given(rates before Febuary 2023 and the new rates for NHIF on the webpage)
    // the statements for the tier are nested within the salary statements for the salary for example if you look at line line 46 and 47 you will see this nesting. 
    // I have checked for to see weather the contribution is valid for the given tier by doing contribution - maxpossiblecontribution
    // and then checking weather this result is > 0, if it is it is not valid.


function payeeGen(salary, nhif,tier,nssf){
     // to begin with nssf can't be more than 400 or less than 0

    if(nssf < 0 || nssf >= 400){
        console.log("Maximum contribution of NSSF is 400 per month")
    }
    let result1
    let result2
    let result3
    let result4
    let result5
    let result6
    let result7
    let result8
    let result9
    let result10
    let result11
    let result12
    if(salary < 24000){
        if(tier === 1){
            result1 = contribution - 6000
            if (result1 > 0){
                console.log('not possible for tier1')
               return "but you can contribute upto 6000"
            }else if(result1 < 0){
                result2 = salary - nhif - nssf
                console.log(result2)
            }

        }else if(tier === 2){
            result1 = contribution - 18001
            if (result1 > 0){
                console.log('not possible for tier2')
               return "but you can contribute upto 18000"
            }else if(result1 <= 0){
                result2 = salary - nhif - nssf
                console.log(result2)
            }
        }
    }else if(salary === 24000){
        if(tier === 1){
            result3 = contribution - 6000
            if (result3 > 0){
                console.log('not possible for tier1')
                return "but you can contribute upto 6000"
            }else if(result3 < 0){
                result4 = salary - nhif - nssf
                return result4 - (salary * 0.1)
            }

        } else if(tier === 2){
            result3 = contribution - 18001
            if (result3 > 0){
                console.log('not possible for tier1')
                return "but you can contribute upto 6000"
            }else if(result3 <= 0){
                result4 = salary - nhif - nssf
                return result4 - (salary * 0.1)
            }

        }
    
    }else if(salary > 24000 && salary <= 32333){
        if(tier === 1){
            result5 = contribution - 6000
            if (result5 > 0){
                console.log('not possible for tier2')
                return "but you can contribute upto 6000"
            }else if(result5 < 0){
                result6 = salary - nhif - nssf
                return result6 - (salary * 0.25)
            }

        }else if(tier === 2){
            result5 = contribution - 18001
            if (result5 > 0){
                console.log('not possible for tier2')
                return "but you can contribute upto 18001"
            }else if(result5 <= 0){
                result6 = salary - nhif - nssf
                return result6 - (salary * 0.25)
            }

        }

    }else if(salary >= 32334 && salary <= 500000){
        if(tier === 1){
            result7 = contribution - 6000
            if (result7 > 0){
                console.log('not possible for tier1')
                return "but you can contribute upto 6000"
            }else if(result7 < 0){
                result8 = salary - nhif - nssf
                return result8 - (salary * 0.3)
            }

        }else if(tier === 2){
            result7 = contribution - 18001
            if (result7 > 0){
                console.log('not possible for tier2')
                return "but you can contribute upto 18001"
            }else if(result7 <= 0){
                result8 = salary - nhif - nssf
                return result8 - (salary * 0.3)
            }

        }
    }else if(salary >= 500001 && salary < 800000){
       if(tier === 1){
        result9 = contribution - 6000
        if (result9 > 0){
            console.log('not possible for tier1')
            return "but you can contribute upto 6000"
        }else if(result9 < 0){
            result10 = salary - nhif - nssf
            return result10 - (salary * 0.325)
        }

    }else if(tier === 2){
            result9 = contribution - 18001
            if (result9 > 0){
                console.log('not possible for tier2')
                return "but you can contribute upto 18001"
            }else if(result9 <= 0){
                result10 = salary - nhif - nssf
                return result10 - (salary * 0.325)
            }

        }

    }else if( salary > 800000){
        if(tier === 1){
            result11 = contribution - 6000
            if (result11 > 0){
                console.log('not possible for tier1')
                return "but you can contribute upto 6000"
            }else if(result11 < 0){
                result12 = salary - nhif - nssf
                return result12 -(salary * 0.35)
            }

        }else if(tier === 2){
            result11 = contribution - 18001
            if (result11 > 0){
                console.log('not possible for tier2')
                return "but you can contribute upto 18001"
            }else if(result11 <= 0){
                result12 = salary - nhif - nssf
                return result12 - (salary * 0.35)
            }

        }

    }
    

    
}

console.log(payeeGen(20000,8000,2,200))
console.log(payeeGen(24000,30,2,800))
console.log(payeeGen(30000,20000,2,100))
console.log(payeeGen(350000,1000,2,10))
console.log(payeeGen(600000,1,2,80))
console.log(payeeGen(900000,1,2,600))

console.log(payeeGen(20000,8000,1,300))
console.log(payeeGen(24000,8000,1,0))
console.log(payeeGen(30000,8000,1,40))
console.log(payeeGen(350000,8000,1,8))
console.log(payeeGen(600000,8000,1,100))
console.log(payeeGen(900000,8000,1,200))

console.log(payeeGen(20000,8000,1,400))
console.log(payeeGen(24000,8000,1,100))
console.log(payeeGen(30000,8000,1,70))
console.log(payeeGen(350000,8000,1,400))
console.log(payeeGen(600000,8000,1,40))
console.log(payeeGen(900000,8000,1,30))

