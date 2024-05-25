// Checking Age for Different Ticket Prices

let age=61;

if(age<=0){
    console .log("You entered a incorrect age");
}
else if(age<12){
    console .log("Child ticket: $5");
}
else if (age>=12 && age<18){
    console .log("Teen ticket: $7");
}
else if (age>=18 && age<=60){
    console .log("Adult ticket: $10");
}
else{
    console .log("Senior ticket: $10");
}