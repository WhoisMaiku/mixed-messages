let starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'];
let luck = ['Good', 'Bad', 'Neutral'];
let advice = ['Go back to bed', 'Try again tomorrow', 'You got this', 'Take a break', 'Today is not your day', 'Trust no one', 'Be kind to yourself', 'You are loved', 'You are enough', 'You are capable'];

// Function to generate a random message from an array
function getRandomMessage(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to get a random star sign
function getStarSign(starSigns) {
    let starSign = getRandomMessage(starSigns);
    return 'Your star sign is: ' + starSign;
}

// Function to determine daily luck
function getDailyLuck(luck) {
    let dailyLuck = getRandomMessage(luck);
    return 'Your daily luck is: ' + dailyLuck;
}

// Function to determine daily advice
function getDailyAdvice(advice) {
    let dailyAdvice = getRandomMessage(advice);
    return 'Your daily advice is: ' + dailyAdvice;
}

function mixedMessages(starSign, luck, advice) {
    console.log(getStarSign(starSign));
    console.log(getDailyLuck(luck));
    console.log(getDailyAdvice(advice));
}

mixedMessages(starSigns, luck, advice);