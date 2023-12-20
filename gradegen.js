// This is a function that can grade a student
// marks must be within 0 and 100
// I have made sure to take care of decimal numbers being added using Math.round at the beginning(line 8)
// The next thing I had to take care of is making sure the mark is between 0 to 100 (line 10)
//then using else if statements I have categorized the marks entered into thier grade group(lime 13 to line 22)
// lastly my function consoles.logs the result given depending on which if or else if staement was evaluated as truw

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
    }
    console.log(result)


}

gradeGen(10)