import { isYes } from './isYes.js';
const userSpan = document.getElementById('user-span');
const resultSpan = document.getElementById('result-span');
const myButton = document.getElementById('action-button');
const percentSpan = document.getElementById('percent-span');
const hiddenResults = document.getElementById('hidden-results');
myButton.onclick = () => {
    alert('I hope you paid attention!');
    
    const userName = prompt('What is your name?');
    const myConfirmation = confirm(userName + ', do you want to take my quiz?');
    if(myConfirmation === true) {
        let userScore = 0;
        const userAnswer = prompt('Is my Boston Terrier 14 years old? (yes/no)');
        const lowercaseUserAnswer = userAnswer.toLowerCase();
        const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

        const userIsCorrect = isYes(trimmedLowercaseUserAnswer);

        if(userIsCorrect) {
            alert('Wrongo!');
        } else {
            userScore++;
            alert('Good Job!');
        }
        const userAnswerTwo = prompt('Did I go to college in Kamiah, Idaho? (yes/no)');
        const lowercaseUserAnswerTwo = userAnswerTwo.toLowerCase();
        const trimmedLowercaseUserAnswerTwo = lowercaseUserAnswerTwo.trim();

        const userIsCorrectTwo = isYes(trimmedLowercaseUserAnswerTwo);

        if(userIsCorrectTwo) {
            alert('Wrongo!');
        } else {
            userScore++;
            alert('Good Job!');
        }

        const userAnswerThree = prompt(`Is Lucca's favorite activity Fetch?`);
        const lowercaseUserAnswerThree = userAnswerThree.toLowerCase();
        const trimmedLowercaseUserAnswerThree = lowercaseUserAnswerThree.trim();

        const userIsCorrectThree = isYes(trimmedLowercaseUserAnswerThree);

        if(userIsCorrectThree) {
            userScore++;
            alert('Good Job!');
        } else {
            alert('Wrongo!');
        }
        userSpan.textContent = userName;
        resultSpan.textContent = userScore;
        percentSpan.textContent = Math.round((userScore / 3) * 100) + '%';
        hiddenResults.classList.remove('hidden');
        
    } else {
        return alert('HOW DARE YOU!');
    }





};

