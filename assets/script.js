
// document.addEventListener("DOMContentLoaded", function() {
//   var timeEl = document.getElementById('time-el');
//   var secondsLeft = localStorage.getItem('secondsLeft') || 75;

//   function updateTimer() {
//       timeEl.textContent = secondsLeft;
//       if (secondsLeft === 0) {
//           clearInterval(timerInterval);
//           // Call a function or perform an action when the timer reaches 0
//           window.location.href = 'leaderboard.html';
//       } else {
//           secondsLeft--;
//           // Save the updated secondsLeft value in Local Storage
//           localStorage.setItem('secondsLeft', secondsLeft);
//       }
//   }

//   function sendMessage(message) {
//       console.log(message);
//       // You can replace this with any action you want to perform when the timer reaches 0
//   }

//   var timerInterval;

//   // Start the timer when the page loads
//   startTimer();

//   function startTimer() {
//       updateTimer();
//       timerInterval = setInterval(updateTimer, 1000);
//   }
// });

//   const wrongAnswerButtons = document.querySelectorAll('#wrong-button');
//   const timeElements = document.querySelectorAll('.time'); // Use a class instead of an invalid ID
  
//   function displayContent() {
//     timeElements.forEach(content => {
//       if (content.style.display === 'none') {
//         content.style.display = 'block';
//         setTimeout(function () {
//           content.style.display = 'none';
//         }, 2000);
//       } else {
//         content.style.display = 'none';
//       }
//     });
//   }
  
  
//   wrongAnswerButtons.forEach(button => {
//     button.addEventListener('click', displayContent);
//   });

//   const wrongAnswer = document.querySelectorAll('#wrong-button')
//   const content = document.querySelectorAll('#--time')
//   function displayContent(){
//     if(content.style.display === 'none'){
//       content.style.display = 'block';
//       setTimeout(function(){
//         content.style.display = 'none';
//       },2000);
//     }else{
//       content.style.display = 'none';
//     }
//   }
  
//   wrongAnswer.forEach(button => {
//     button.addEventListener('click', displayContent);
// });


// const correctBtn = document.getElementById('correct-button');
// let score = 0;
// // Retrieve the score from local storage if available
// if (localStorage.getItem('score')) {
//   score = parseInt(localStorage.getItem('score'));
// }


// function updateScoreDisplay(){
// // Update the UI element that displays the score
//   // For example: document.getElementById('score-display').textContent = score;

// }
// // Update the score and save it to local storage
// function increaseScore() {
//   score + 10;
//   localStorage.setItem('score', score.toString());
//   updateScoreDisplay();
// }


// correctBtn.addEventListener('click', increaseScore);

// // Initialize the score display when the page loads
// updateScoreDisplay();

// document.addEventListener("DOMContentLoaded", function() {
//   var timeEl = document.getElementById('time-el');
//   var secondsLeft = localStorage.getItem('secondsLeft') || 75;

//   function updateTimer() {
//       timeEl.textContent = secondsLeft;
//       if (secondsLeft <= 0) {
//           clearInterval(timerInterval);
//           // Call a function or perform an action when the timer reaches 0
//           window.location.href = 'leaderboard.html';
//       } else {
//           secondsLeft--;
//           // Save the updated secondsLeft value in Local Storage
//           localStorage.setItem('secondsLeft', secondsLeft);
//       }
//   }

//   function subtractTime(seconds) {
//     secondsLeft -= seconds;
//     localStorage.setItem('secondsLeft', secondsLeft);
//     updateTimer();
//   }

//   var timerInterval;

//   // Start the timer when the page loads
//   startTimer();

//   function startTimer() {
//       updateTimer();
//       timerInterval = setInterval(updateTimer, 1000);
//   }

//   const wrongAnswerButtons = document.querySelectorAll('#wrong-button');

//   function handleWrongButtonClick() {
//     subtractTime(15); // Subtract 15 seconds
//     displayContent();
//   }

//   function displayContent() {
//     timeElements.forEach(content => {
//       if (content.style.display === 'none') {
//         content.style.display = 'block';
//         setTimeout(function () {
//           content.style.display = 'none';
//         }, 2000);
//       } else {
//         content.style.display = 'none';
//       }
//     });
//   }
  
//   // Attach the click event listener to each wrong-answer button
//   wrongAnswerButtons.forEach(button => {
//     button.addEventListener('click', handleWrongButtonClick);
//   });

//   const finScoreElement = document.querySelector('.fin-score');

//   // Set the content of the element to the value of secondsLeft
//   finScoreElement.textContent = `Final score: ${secondsLeft}`;
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const initialsForm = document.getElementById('initials-form');
//   const initialsInput = document.getElementById('initials-input');
//   const initialsList = document.getElementById('initials-list');

//   initialsForm.addEventListener('submit', function(event) {
//       event.preventDefault();

//       const initialsValue = initialsInput.value.trim();
//       if (initialsValue !== '') {
//           const listItem = document.createElement('li');
//           listItem.textContent = initialsValue;
//           initialsList.appendChild(listItem);

//           // Clear the input field after adding the list item
//           initialsInput.value = '';
//       }
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var timeEl = document.getElementById('time-el');
//   var secondsLeft = localStorage.getItem('secondsLeft') || 75;

//   function updateTimer() {
//       timeEl.textContent = secondsLeft;
//       if (secondsLeft <= 0) {
//           clearInterval(timerInterval);
//           // Call a function or perform an action when the timer reaches 0
//           window.location.href = 'leaderboard.html';
//       } else {
//           secondsLeft--;
//           // Save the updated secondsLeft value in Local Storage
//           localStorage.setItem('secondsLeft', secondsLeft);
//       }
//   }

//   function subtractTime(seconds) {
//       secondsLeft -= seconds;
//       localStorage.setItem('secondsLeft', secondsLeft);
//       updateTimer();
//   }

//   var timerInterval;

//   // Start the timer when the page loads
//   startTimer();

//   function startTimer() {
//       updateTimer();
//       timerInterval = setInterval(updateTimer, 1000);
//   }

//   const wrongAnswerButtons = document.querySelectorAll('#wrong-button');

//   function handleWrongButtonClick() {
//       subtractTime(15); // Subtract 15 seconds
//       displayContent();
//   }

//   function displayContent() {
//       timeElements.forEach(content => {
//           if (content.style.display === 'none') {
//               content.style.display = 'block';
//               setTimeout(function () {
//                   content.style.display = 'none';
//               }, 2000);
//           } else {
//               content.style.display = 'none';
//           }
//       });
//   }

//   wrongAnswerButtons.forEach(button => {
//       button.addEventListener('click', handleWrongButtonClick);
//   });

//   const correctBtn = document.getElementById('correct-button');
//   let score = 0;

//   if (localStorage.getItem('score')) {
//       score = parseInt(localStorage.getItem('score'));
//   }

//   function updateScoreDisplay() {
//       // Update the UI element that displays the score
//       // For example: document.getElementById('score-display').textContent = score;
//   }

//   function increaseScore() {
//       score += 10;
//       localStorage.setItem('score', score.toString());
//       updateScoreDisplay();
//   }

//   const wrongMessage = document.querySelector('.time');
//   wrongAnswerButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         wrongMessage.style.display = 'block';
//         setTimeout(function() {
//             wrongMessage.style.display = 'none';
//         }, 2000);
//       });
//   });

//   correctBtn.addEventListener('click', increaseScore);
//   updateScoreDisplay();

//   const finScoreElement = document.querySelector('.fin-score');
//   finScoreElement.textContent = `Final score: ${secondsLeft + score}`;


//   function addToOL() {
//     var firstName = document.getElementById("fname").value;
//     var ol = document.getElementById("nameList");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(firstName));
//     ol.appendChild(li);
//     document.getElementById("fname").value = ""; // Clear the input field




 

  
// });



// document.addEventListener("DOMContentLoaded", function() {
//   var timeEl = document.getElementById('time-el');
//   var secondsLeft = localStorage.getItem('secondsLeft') || 75;
  
//   function updateTimer() {
//       timeEl.textContent = secondsLeft;
//       if (secondsLeft <= 0) {
//           clearInterval(timerInterval);
//           // Call a function or perform an action when the timer reaches 0
//           window.location.href = 'leaderboard.html';
//       } else {
//           secondsLeft--;
//           // Save the updated secondsLeft value in Local Storage
//           localStorage.setItem('secondsLeft', secondsLeft);
//       }
//   }
  
//   function subtractTime(seconds) {
//       secondsLeft -= seconds;
//       localStorage.setItem('secondsLeft', secondsLeft);
//       updateTimer();
//   }
  
//   var timerInterval;
  
//   // Start the timer when the page loads
//   startTimer();
  
//   function startTimer() {
//       updateTimer();
//       timerInterval = setInterval(updateTimer, 1000);
//   }
  
//   const wrongAnswerButtons = document.querySelectorAll('#wrong-button');
  
//   function handleWrongButtonClick() {
//       subtractTime(15); // Subtract 15 seconds
//       displayContent();
//   }
  
//   function displayContent() {
    
//   }
  
//   wrongAnswerButtons.forEach(button => {
//       button.addEventListener('click', handleWrongButtonClick);
//   });
  
//   const correctBtn = document.getElementById('correct-button');
//   let score = 0;
  
//   if (localStorage.getItem('score')) {
//       score = parseInt(localStorage.getItem('score'));
//   }
  
//   function updateScoreDisplay() {
//       // Update the UI element that displays the score
//       // For example: document.getElementById('score-display').textContent = score;
//   }
  
//   function increaseScore() {
//       score += 10;
//       localStorage.setItem('score', score.toString());
//       updateScoreDisplay();
//   }
  
//   const wrongMessage = document.querySelector('.time');
//   wrongAnswerButtons.forEach(button => {
//       button.addEventListener('click', function() {
//           wrongMessage.style.display = 'block';
//           setTimeout(function() {
//               wrongMessage.style.display = 'none';
//           }, 2000);
//       });
//   });
  
//   correctBtn.addEventListener('click', increaseScore);
//   updateScoreDisplay();
  
//   const finScoreElement = document.querySelector('.fin-score');
//   finScoreElement.textContent = `Final score: ${secondsLeft + score}`;
  
//   // Your form handling code here
//   const form = document.querySelector('form');
//   form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the default form submission
//       addToOL();
//   });
  
//   function addToOL() {
//       var firstName = document.getElementById("fname").value;
//       var ol = document.getElementById("nameList");
//       var li = document.createElement("li");
//       li.appendChild(document.createTextNode(firstName));
//       ol.appendChild(li);
//       document.getElementById("fname").value = ""; // Clear the input field
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
    var timeEl = document.getElementById('time-el');
    var secondsLeft = localStorage.getItem('time-left') || 75;
    
    function updateTimer() {
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            // Call a function or perform an action when the timer reaches 0
            window.location.href = 'C:\Users\Rst14\All-school-projects\What-is-code-quiz\leaderbored.html';
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
