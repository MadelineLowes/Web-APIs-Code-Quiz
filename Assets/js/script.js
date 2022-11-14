function startQuiz() {
  // hide the homepage header & buttons
  $("#homepage-header").addClass("hide");
  $("#homepage-buttons").addClass("hide");
 $("#restart-quiz2").addClass("hide");
  // unhide the question page header & card
  $("#question-page-header").removeClass("hide");
  $("#question-card").removeClass("hide");

  const questionList = [
    ["What is CSS used for?", "to style", "to allow interaction", "to add accessibility", "all of the above", "answer-btn1"],
    ["This is the second question?", "no", "yes", "nope", "all of the above", "answer-btn2"],
    ["This is the third question?", "no", "nope", "yes", "all of the above", "answer-btn3"]
  ];

  console.log("this is where the test begins");
  let i = 0;
  let currentScore = 0;

  function setQuestion() {
    $("#listed-question").html(questionList[i][0]);
    $("#answer-btn1").html(questionList[i][1]);
    $("#answer-btn2").html(questionList[i][2]);
    $("#answer-btn3").html(questionList[i][3]);
    $("#answer-btn4").html(questionList[i][4]);

    // can i add a function here so that the index target registers only clicking of the question list buttons
    $(".answerBtn").one("click", function (index) {
      let idClicked = index.target.id;
      $("#next-btn").removeClass("hide");
      let answers = questionList[i][5];

      if (idClicked === answers) {
        $("#current-score").html(currentScore += 10);
        console.log("correct!");
      } else {
        $("#current-score").html(currentScore -= 2.5);
        console.log("incorrect!");
      }

      $("#next-btn").one("click", function () {
        if (i < questionList.length) {
          i++;
        };
        console.log("Im RESETTING the question");
        setQuestion();
        $("#next-btn").addClass("hide");
      });
    });
  };
  setQuestion();
  console.log("im setting the question!");
};

function viewHighScores() {
  // hide the homepage header & buttons
  $("#homepage-header").addClass("hide");
  $("#homepage-buttons").addClass("hide");

  $("#highscore-page-header").removeClass("hide");
  // this card hasnt been created yet but will hold the info of score and user, sorted from highest to lowest
  // $("#highscore-page-card").removeClass("hide");
  console.log("viewHighScores was clicked");
};


$("#restart-quiz1").click(startQuiz);
$("#restart-quiz2").click(startQuiz);
$("#start-quiz").click(startQuiz);
$("#highscores1").click(viewHighScores);
$("#highscores2").click(viewHighScores);
$("#highscores3").click(viewHighScores);



