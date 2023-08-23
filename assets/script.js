

document.addEventListener("DOMContentLoaded", function() {
    var timeEl = document.getElementById('time-el');
    var secondsLeft = localStorage.getItem('time-left') || 75;
    
    function updateTimer() {
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // Call a function or perform an action when the timer reaches 0
            window.location.href = 'C:\\Users\\Rst14\\All-school-projects\\What-is-code-quiz\\leaderbored.html';

        } else {
            secondsLeft--;
            // Save the updated secondsLeft value in Local Storage
            localStorage.setItem('time-left', secondsLeft);
        }
    }
    
    function subtractTime(seconds) {
        secondsLeft -= seconds;
        localStorage.setItem('time-left', secondsLeft);
        updateTimer();
    }
    
    var timerInterval;
    
    // Start the timer when the page loads
    startTimer();
    
    function startTimer() {
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    const wrongAnswerButtons = document.querySelectorAll('#wrong-button');
    
    function handleWrongButtonClick() {
        subtractTime(15); // Subtract 15 seconds
        displayContent();
    }
    
    
    wrongAnswerButtons.forEach(button => {
        button.addEventListener('click', handleWrongButtonClick);
    });
    
    const correctBtn = document.getElementById('correct-button');
    let score = 0;
    
    if (localStorage.getItem('score')) {
        score = parseInt(localStorage.getItem('score'));
    }
    
    function updateScoreDisplay() {
        // Update the UI element that displays the score
        // For example: document.getElementById('score-display').textContent = score;
    }
    
    function increaseScore() {
        score += 10;
        localStorage.setItem('score', score.toString());
        updateScoreDisplay();
    }
    
    const wrongMessages = document.querySelectorAll('.time');
        wrongAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
        wrongMessages.forEach(wrongMessage => {
            wrongMessage.style.display = 'block';
            setTimeout(function() {
                wrongMessage.style.display = 'none';
            }, 1000);
        });
    });
});
    
    correctBtn.addEventListener('click', increaseScore);
    updateScoreDisplay();
    
    const finScoreElement = document.querySelector('.fin-score');
    finScoreElement.textContent = `Final score: ${parseInt(secondsLeft) + score}`;
    
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addToOL();
    });
    
    function addToOL() {
        var firstName = document.getElementById("fname").value;
        var ol = document.getElementById("nameList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(firstName));
        ol.appendChild(li);
        document.getElementById("fname").value = ""; // Clear the input field
    }
  });
