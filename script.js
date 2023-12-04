let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

    btn.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            btnIcon.src = "images/sun.png";
            btnText.innerHTML = "Light";

        } else {
            btnIcon.src = "images/moon.png";
            btnText.innerHTML = "Dark";

        }


    }


const questions = [
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
        question: "Which is largest river in Africa ",
        answers:[
            {text: "Amazonas", correct:false},
            {text: "White River", correct:false},
            {text: "Nilo", correct:true},
            {text: "Cocus", correct:false},
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
        question: "Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text: "Australia", correct:true},
            {text: "Arctic", correct:false},
            {text: "Africa", correct:false},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}