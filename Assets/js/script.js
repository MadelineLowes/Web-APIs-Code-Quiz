function startQuiz() {
  // hide the homepage header & buttons
  $("#homepage-header").addClass("hide");
  $("#homepage-buttons").addClass("hide");
  $("#highscore-page-header").addClass("hide");
  $("#highscore-page-card").addClass("hide");
  // unhide the question page header & card
  $("#question-page-header").removeClass("hide");
  $("#question-card").removeClass("hide");

  // checking local storage to confirm if anything has been stored, if yes, users will be removed from the table so that they aren't duplicated
  if (localStorage.getItem("locallyStoredUsers") != null) {
    var users = JSON.parse(localStorage.getItem("locallyStoredUsers"))
    for (let i = 0; i < users.length; i++) {
      $(`#user-pair${i}`).remove();
    }
  }
  // question, 4 options, answer
  const questionList = [
    ["What does CSS add?", "style", "stucture", "user interaction", "accessibility", "answer-btn1"],
    ["What does HTML add?", "style", "structure", "user interaction", "accessibility", "answer-btn2"],
    ["What does JavaScript add?", "style", "structure", "user interaction", "accessibility", "answer-btn3"],
    ["What is jQuery used for?", "to reduce the of lines of code required", "to make it easier to use JavaScript on your website", "to write less & do more", "all of the above", "answer-btn4"],
    ["An array is a container that holds...", "statements", "loops", "variables", "functions", "answer-btn3"]
  ];

  let i = 0;
  let currentScore = 0;
  // function resetScore() {
    if (currentScore != 0) {
      currentScore = 0;
    } else {
      currentScore = 0;
    }
  
  // upon restarting quiz, currentScore needs to clear to = 0 
  // let currentScore = 0;
  // resetScore();

  function setQuestion() {
    $("#listed-question").html(questionList[i][0]);
    $("#answer-btn1").html(questionList[i][1]);
    $("#answer-btn2").html(questionList[i][2]);
    $("#answer-btn3").html(questionList[i][3]);
    $("#answer-btn4").html(questionList[i][4]);
    // can i add a function here so that the index target registers only clicking of the question list buttons

    $(".answerBtn").off().click(function (index) {

      let idClicked = index.target.id;

      let answers = questionList[i][5];
      $("#next-btn").removeClass("hide");

      if (idClicked === answers) {
        $("#current-score").html(currentScore += 10);
        $("#next-btn").addClass("correct");
      } else {
        $("#current-score").html(currentScore -= 5);
        $("#next-btn").addClass("incorrect");
      }

      $("#next-btn").off().click(function () {
        if (i < (questionList.length - 1)) {
          i++;
          setQuestion();
          $("#next-btn").removeClass("correct");
          $("#next-btn").removeClass("incorrect");
          $("#next-btn").addClass("hide");
        } else {
          userNameInput(currentScore);
        }
      });
    });
  };
  setQuestion();
}

function viewHighScores() {
  // hide the homepage header & buttons
  $("#homepage-header").addClass("hide");
  $("#homepage-buttons").addClass("hide");
  $("#next-btn").addClass("hide");
  $("#question-page-header").addClass("hide");
  $("#question-card").addClass("hide");
  $("#user-name-intake").addClass("hide");

  $("#highscore-page-header").removeClass("hide");
  $("#highscore-page-card").removeClass("hide");

  if (localStorage.getItem("locallyStoredUsers") === null) {
    var users = []
  } else {
    var users = JSON.parse(localStorage.getItem("locallyStoredUsers"))
  }


  for (i = 0; i < users.length; i++) {
    let table = $("#highscore-table");
    let newRow = $("#user-pair");

    function addRow(table) {
      //new row
      newRow.clone()
        .attr("id", `user-pair${i}`) // everytime we clone, we give new id
        .removeClass("hide")
        .appendTo(table) // then append to table

      //contents for name cell
      $(`#user-pair${i} :nth-child(1)`).attr("id", `name${i}`)
      $(`#name${i}`).html(users[i][0].name)

      //contents for score cell
      $(`#user-pair${i} :nth-child(2)`).attr("id", `score${i}`)
      $(`#score${i}`).html(users[i][0].score)
    }
    addRow(table);
  }

  function checkHighScore() {
    let scoreArray = [];
    for (i = 0; i < users.length; i++) {
      scoreArray.push(users[i][0].score)
    }
    let highestScore = Math.max(...scoreArray);

    for (i = 0; i < users.length; i++) {
      if (highestScore === users[i][0].score) {
        $(`#user-pair${i}`).addClass("highestScore");
        $(`#score${i}`).addClass("highestScore");
        $(`#name${i}`).addClass("highestScore");
      }
    }
  }
  checkHighScore;
}

function userNameInput(currentScore) {
  $("#next-btn").addClass("hide");
  $("#question-page-header").addClass("hide");
  $("#question-card").addClass("hide");

  $("#user-name-intake").removeClass("hide");

  // on userNameInput load, local storage gets pushed to empty array (storedUsers)
  if (localStorage.getItem("locallyStoredUsers") === null) {
    var users = []
  } else {
    var users = JSON.parse(localStorage.getItem("locallyStoredUsers"))
  }

  //once submit button has been clicked, this input will be pushed to storedUsers array too
  function storeInput() {
    let storeUser = [{
      name: $("#inputted-user-name").val(),
      score: currentScore
    }]
    users.push(storeUser);
    localStorage.setItem("locallyStoredUsers", JSON.stringify(users));
    viewHighScores();
  }

  $("#user-name-intake").submit(storeInput);
};


$("#restart-quiz").click(startQuiz);
$("#start-quiz").click(startQuiz);
$("#highscores-home").click(viewHighScores);
$("#exit-quiz").click(viewHighScores);
$("#highscores-quiz").click(viewHighScores);

