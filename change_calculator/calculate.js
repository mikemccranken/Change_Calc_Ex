"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        let isValid = true;

        let centsCount = $("#cents").val();
        centsCount = parseInt(centsCount);
        isValid = validateChange(centsCount);

        let afterQuarters = centsCount % 25;
        let quarters = (centsCount - afterQuarters) / 25;

        let afterDimes = afterQuarters % 10;
        let dimes = (afterQuarters - afterDimes) / 10;

        let afterNickels = afterDimes % 5;
        let nickels = (afterDimes - afterNickels) / 5;

        let pennies = afterNickels;

        $("#quarters").val(quarters);
        $("#dimes").val(dimes);
        $("#nickels").val(nickels);
        $("#pennies").val(pennies);

    }); // end click() method
    

    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method

const validateChange = (cents) => {
    cents = parseInt(cents);

    if (isNaN(cents)){
        alert("Please enter a valid number.")
        $("#cents").val("");
        $("#cents").focus();
        return false;
        
    }
    else if (cents < 1 || cents > 99) {
        alert("Please enter a valid number.")
        return false;
    }
    else {
        return true;
    };
};