
// document.addEventListener("DOMContentLoaded", function() {
//     var timeEl = document.getElementById('time-el');
//     var secondsLeft = 75;



//     function updateTimer() {
//       timeEl.textContent = secondsLeft;
//       if (secondsLeft === 0) {
//         clearInterval(timerInterval);
//         // Call a function or perform an action when the timer reaches 0
//         window.location.href = 'leaderbored.html'
//       }else{
//         secondsLeft--;
//       }
//     }
  
//     function sendMessage(message) {
//       console.log(message);
//       // You can replace this with any action you want to perform when the timer reaches 0
//     }
  
//     var timerInterval;
  
//     // Start the timer when the page loads
//     startTimer(); 
    
//     // function startTimer(){

//     // }




//     function startTimer() {
//       // Call the updateTimer function every second/
//       timerInterval = setInterval(updateTimer, 1000);
//     }
//   });


document.addEventListener("DOMContentLoaded", function() {
  var timeEl = document.getElementById('time-el');
  var secondsLeft = localStorage.getItem('secondsLeft') || 75;

  function updateTimer() {
      timeEl.textContent = secondsLeft;
      if (secondsLeft === 0) {
          clearInterval(timerInterval);
          // Call a function or perform an action when the timer reaches 0
          window.location.href = 'leaderboard.html';
      } else {
          secondsLeft--;
          // Save the updated secondsLeft value in Local Storage
          localStorage.setItem('secondsLeft', secondsLeft);
      }
  }

  function sendMessage(message) {
      console.log(message);
      // You can replace this with any action you want to perform when the timer reaches 0
  }

  var timerInterval;

  // Start the timer when the page loads
  startTimer();

  function startTimer() {
      updateTimer();
      timerInterval = setInterval(updateTimer, 1000);
  }
});












  const wrongAnswerButtons = document.querySelectorAll('#wrong-button');
  const timeElements = document.querySelectorAll('.time'); // Use a class instead of an invalid ID
  
  function displayContent() {
    timeElements.forEach(content => {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        setTimeout(function () {
          content.style.display = 'none';
        }, 2000);
      } else {
        content.style.display = 'none';
      }
    });
  }
  
  // Attach the click event listener to each wrong-answer button
  wrongAnswerButtons.forEach(button => {
    button.addEventListener('click', displayContent);
  });

  // const wrongAnswer = document.querySelectorAll('#wrong-button')
  // const content = document.querySelectorAll('#--time')
  // function displayContent(){
  //   if(content.style.display === 'none'){
  //     content.style.display = 'block';
  //     setTimeout(function(){
  //       content.style.display = 'none';
  //     },2000);
  //   }else{
  //     content.style.display = 'none';
  //   }
  // }
  
  wrongAnswerButtons.forEach(button => {
    button.addEventListener('click', displayContent);
});


const correctBtn = document.getElementById('correct-button');
let score = 0;
// Retrieve the score from local storage if available
if (localStorage.getItem('score')) {
  score = parseInt(localStorage.getItem('score'));
}


function updateScoreDisplay(){
// Update the UI element that displays the score
  // For example: document.getElementById('score-display').textContent = score;

}
// Update the score and save it to local storage
function increaseScore() {
  score + 10;
  localStorage.setItem('score', score.toString());
  updateScoreDisplay();
}


correctBtn.addEventListener('click', increaseScore);

// Initialize the score display when the page loads
updateScoreDisplay();