$(document).ready(function(){
  var questions = [{question:"Who is the youngest solo artist to have a number 1 best selling single?",
	choices:["Taylor Swift", "Stevie Wonder", "Justin Beiber", "Michael Jackson"], correct: 1},
					{question: "Which song spent the most weeks at number 1",
					choices: ["One Sweet Day - Mariah Carey and Boyz 2 Men", "I Will Always Love You - Whitney Houston", "The Boy is Mine - Brandy and Monica",
					"Hound Dog - Elvis Presely"], correct: 0},
					{question:"Which song spent the most weeks in the top ten",
					choices: ["LeAnn Rimes, How do I live", "Chubby Checker, The Twist", "OneRepublic, Apologize", "Creed, Higher"], correct: 0},
					{question: "Which album had all its songs chart on the Top 100",
					choices: ["Thriller, Michael Jackson", "Teenage Dream, Katy Perry", "Speak Now, Taylor Swift", "Faith, George Michael"], correct: 2},
					{question: "Who is the only artist to hold the top two spots on the Top 100 singles and Top 100 album charts, simultaneously",
					choices:["Justin Timberlake", "Michael Jackson", "Elvis Presley", "The Beatles"], correct: 3}];
var correctAnswer = 0;
var counter = 0;
var questionCounter = 1;
  
  $(".start").on("click", function(){
		startGame();
      console.log("start button clicked");
	});

  function startGame(){    
  	$(".start").fadeOut("slow");
  	var currentQuestion = questions[counter];
    console.log("game started");
 	$("#question").html("Question " + questionCounter +": " + currentQuestion.question);
	$("#choice1").html(currentQuestion.choices[0]);
	$("#choice2").html(currentQuestion.choices[1]);
	$("#choice3").html(currentQuestion.choices[2]);
	$("#choice4").html(currentQuestion.choices[3]);                    
  }
    

  
});