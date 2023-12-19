// This is a function that can grade a student
// marks must be within 0 and 100
// I used if else if statements here so as there were many conditions and it made my work more readable

function gradeGen(mark){
    turemark = Math.round(mark)
    let result
     if(turemark < 0 || turemark > 100){
         result = 'enter a valid mark'
     }else if (turemark > 79){
        result = 'A'
     }else if(turemark <= 79 && turemark >= 60){
        result = 'B'
     }else if(turemark <= 59 && turemark > 49 ){
        result = 'C'
     }else if (turemark <= 49 && turemark >= 40){
        result = 'D'
     }else if (turemark < 40){
        result = 'E'
     }else if(turemark < 0 || turemark > 100){
        console.log('enter a valid mark')
     }
     console.log(result)


}

gradeGen(49.6)