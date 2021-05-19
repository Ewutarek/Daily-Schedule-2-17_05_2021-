

function getInputValue() 
{
        // Selecting the input element and get its value 
        let inputVal = document.getElementById("day").value;
        // Displaying the value
        return inputVal;
}

const dailySchedule = () => {
  let dayStringUP = getInputValue().toUpperCase();
  let normalString = getInputValue();
  let msg ="";

  
  

  switch (dayStringUP) {
  case "MONDAY":
    msg = `${dayStringUP}: Day 1 of Module 1`; 
    break;
  case "TUESDAY":
    msg = `${dayStringUP}: Eat Muesli`; 
    break;
  case "WEDNESDAY":
    msg = `${dayStringUP}: Send email`; 
    break;
  case "THURSDAY":
    msg = `${dayStringUP}: Workout`; 
    break;
  case "FRIDAY":
    msg = `${dayStringUP}: Read`; 
    break;
  case "SATURDAY":
    msg = `${dayStringUP}: Watch Film`; 
    break;
  case "SUNDAY":
    msg = `${dayStringUP}: Chill`; 
    break;
  default:
     msg =`Sorry [${normalString}] is an invalid day.\nPlease enter any of these days: \nMonday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday `; 
}
 return msg;
};

 document.getElementById("msgText").innerHTML =dailySchedule();