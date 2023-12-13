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
        question: "Is San Marino the old nation in the world?, Choose more that two answer.",
        answers:[
            {text: `It is San Marino`, correct:false},
            {text: "No, it is Vatican", correct:true},
            {text: "Japan", correct:false},
            {text: "Brunei", correct:false},
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false},
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
        question: "Which is smallest country in the world?",
        answers:[
            {text: "Vatican city", correct:true},
            {text: "Bhutan", correct:false},
            {text: "Nepal", correct:false},
            {text: "Sri Lanka", correct:false},
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
        question: "Is true that deepest lake is in Russia?",
        answers:[
            {text: "False", correct:false},
            {text: "True", correct:true},
           
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
        question: "Which is largest desert in the world?",
        answers:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct:false},
            {text: "Sahara", correct:false},
            {text: "Antarctica", correct:true},
        ]
    },
    {
        question: "Is San Marino the old nation in the world?",
        answers:[
            {text: "It is San Marino", correct:false},
            {text: "No, it is Vatican", correct:true},
            {text: "Japan", correct:false},
            {text: "Brunei", correct:false},
        ]
    },
     {
        question: "Is Tuvalu the smallest continent in the world?",
        answers:[
            {text: "True", correct:false},
            {text: "False", correct:true}
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

    }else if(score<6){resultt.classList.add("low-score");
        pointsElement.innerHTML = `Less that 51%, No Good!`;
    
    }else(score===0);{
    pointsElement.removeAttribute;

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