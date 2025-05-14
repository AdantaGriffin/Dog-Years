

submit.addEventListener('click', () => {
    const userInput = document.getElementById('age');

    let myAge = userInput.value; 
    // Variable representing my age
    let earlyYears = 2; 
    //earlyYears set to 2 
    earlyYears = earlyYears * 10.5; 
    //early value  times 10.5 
    let laterYears = myAge - 2; 
    // my Age minus the first 2 already accounted for in code above earlyears
    laterYears = laterYears * 4; 
    //later years of my age times 4 to calculate laterYears age in dog year.
    let myAgeInDogYears = earlyYears + laterYears;
    
    const responseDisplay = document.getElementById('dogYears');

    responseDisplay.innerText = myAgeInDogYears;
})