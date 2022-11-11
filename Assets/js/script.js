// const startButton = $("#start-quiz");
// //from homepage
// const highscoresButton = $("#highscores");
// //from questions page
// const exitButton = $('#highscores');
// const restartButton = $('#restart-quiz');
// const homePageHeader = $('#homepage-header');
// const questionPageHeader = $('#question-page-header');

// const homePageButtons = $('#homepage-buttons');
// let questionContainer = $('#question-card');
// let listedQuestion = $('#listed-question');
// let answerOptions = $('#answer-options');
// let selction1 = $('#answer-btn1');
// let selction2 = $('#answer-btn2');
// let selction3 = $('#answer-btn3');
// let selction4 = $('#answer-btn4');
// let timerCountdown = $('#timer-countdown');
// let storedUserNames = $("#stored-user-names");
// let storedScores = $("#stored-scores");



let questionList =
  [
    {
      question: "What is CSS used for?",
      choices: ["to style", "to allow interaction", "to add accessibility", "all of the above"],
      answer: "1"
    },
    {
      question: "This is the second question?",
      choices: ["no", "yes", "nope", "all of the above"],
      answer: "2"
    },
    {
      question: "This is the third question?",
      choices: ["nope", "no", "yes", "all of the above"],
      answer: "3"
    }
  ];

function startQuiz() {
  // hide the homepage header & buttons
  $("#homepage-header").css('display', 'none');
  $("#homepage-buttons").css('display', 'none');

  // unhide the question page header & card
  $("#question-page-header").removeClass('hide');
  $("#question-card").removeClass('hide');

  let currentScore = 0;

  // populate display with first question
  for (var i = 0; i < questionList.length; ) {

    $("#listed-question").html(questionList[i].question);
    $("#answer-btn1").html(questionList[i].choices[0]);
    $("#answer-btn2").html(questionList[i].choices[1]);
    $("#answer-btn3").html(questionList[i].choices[2]);
    $("#answer-btn4").html(questionList[i].choices[3]);
    let questionAnswer = (questionList[i].answer);

    $(".answerBtn").click(function () {
      // `this` is the DOM element that was clicked
      var index = $(".answerBtn").index(this);
      console.log(index);

      if (index = questionAnswer) {
        $("#next-btn-correct").removeClass('hide');
        console.log("correct");
        $("#current-score").html(currentScore += 10);

        $("#next-btn-correct").onclick.addClass('hide');
        i++;
      } else {
        $('#next-btn-incorrect').removeClass('hide');
        console.log("incorrect");
        $("#current-score").html(currentScore -= 5);
        $('#next-btn-incorrect').onclick.addClass('hide');
        i++;
        // deduct time
      }
    });

  }
    $("#restart-quiz").on("click", startQuiz);
}


function viewHighScores() {
  console.log("viewHighScores was clicked");
}


$("#restart-quiz").on("click", startQuiz);
$("#start-quiz").on("click", startQuiz);
$("#highscores").on("click", viewHighScores);






// // FOR THE MODAL FOR GETTING THEIR USERNAME
// // Get the modal
// var modal = document.getElementById("#usernameModal");

// // Get the button that opens the modal
// var btn = document.getElementById("#start-quiz");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("submit")[0];

// // When the user clicks on the button, open the modal
// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }