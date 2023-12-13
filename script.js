let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

    btn.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            btnIcon.src = "images/sun.png";
            btnText.innerHTML = "Light";

        } else {
            btnIcon.src = "images/download.png";
            btnText.innerHTML = "Dark";

        }


    }
   


const questions = [
    
    {
        question: "Who created the computer?",
        answers:[
            {text: `Steven Jobs`, correct:false},
            {text: "Charles Babbage", correct:true},
            {text: "Bill Gates", correct:false},
            {text: "Guido Van Rossum", correct:false},
        ]
    },
    {
        question: "Which country is the least visited in the world in 2023?",
        answers:[
            {text: "Brunei", correct:false},
            {text: "Belize", correct:false},
            {text: "Kazakhstan", correct:false},
            {text: "Tuvalu", correct:true},
        ]
    },
    {
        question: "Is America largest continent? ",
        answers:[
            {text: "False", correct:true},
            {text: "True", correct:false},
            
        ]
    },
    {
        question: "what is the oldest civilization?",
        answers:[
            {text: "Sumerian", correct:true},
            {text: "Minoan", correct:false},
            {text: "Egyptian", correct:false},
            {text: "Mesopotamia", correct:false},
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct:false},
            {text: "Sahara", correct:false},
            {text: "Antarctica", correct:true},
        ]
    },
    {
        question: "What colour can dogs see?",
        answers:[
    
            {text: "Blue pink and Blue", correct:false},
            {text: "None", correct:false},
            {text: "Yellow and blue violet", correct:true},
            {text: "Orange and Yellow", correct:false},
            
           
        ]
    },
     {
        question: "Is Tuvalu the smallest continent in the world?",
        answers:[
            {text: "True", correct:false},
            {text: "False", correct:true}
        ]
    },
    {
        question: "What was the largest empire in Pre-Columbian America",
        answers:[
            {text: "Inca", correct:true},
            {text: "Maya", correct:false},
            {text: "Olmeca", correct:false},
            {text: "Azteca", correct:false},
        ]
    },
    {
        question: "What country is inside another country",
        answers:[
            {text: "Eswatini", correct:false},
            {text: "Uganda", correct:false},
            {text: "Lesoto", correct:true},
            {text: "Burundi", correct:false},
        ]
    },
     {
        question: "Is Scotland's official animal a unicorn?",
        answers:[
            {text: "True", correct:true},
            {text: "False", correct:false}
        ]
    }
  

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const pointsElement = document.getElementById("points");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
 


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
     if(score > 7){
        resultt.classList.add("high-score");
        pointsElement.innerHTML = `More that 75%,Very Good!`;
    }else if(score >5 && score< 8){
        resultt.classList.add("medium-score");
        pointsElement.innerHTML = `Between 51% and 75%,Good!`;

    }else{resultt.classList.add("low-score");
        pointsElement.innerHTML = `Less that 51%, No Good!`;
    }
}



    


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();