// this is a function that takes in 4 arguments.
// the salary inputed is reduced accoding to the other 3 arguments.
// nhif is the argument tht is shows how much a person is contributing to nhif
// nssf is just like nhif exept now the the money goes to nssf and not nhif
//

function payeeGen(salary, nhif,tier,nssf){
     // to begin with nssf can't be more than 400 or less than 0

    if(nssf < 0 || nssf > 400){
        console.log("Maximum contribution of NSSF is 400 per month")
    }
    // I have declared all the variables uesed for my code (refference line 27 to to line 38)
    // the main dedeucter of the salary is tax (for example line 69 the tax is the (salary * 0.1)) (reference is the follwing lines
    // 69,79,92,102,115,125,137,147,160,170) all of these have been done in accordance to the line below
    // Tax can be split into groups based on the salary:
    // 1) salaries below 24000 (refference line 41 to line 62)
    // 2) salaries =  24000 (refference line 62 to 85 )
    // 3) salaries greater than 24000 and less than 32333 (refference line 85 t )
    // 4) salaries greater than 32333 and less than 500000 (refference lnie )
    // 5) salaries grester than 500000 and less than 800000
    // 60 salaries greater than 800000
    // throughout my code the statement that checks the salary range and then the statement that checks the tier
    // the statements for the tier are nested within the salary checker statements
    // I have checked for to see weather the contribution is valid for the given tier by doing contribution - maxpossiblecontribution
    // and then checking weather this result is > 0, if it is it is not valid

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
               return "but you can contribute upto 18001"
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

console.log(payeeGen(900000,8000,2,800))
