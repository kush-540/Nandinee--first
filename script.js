// commit first
const question=[
    {
        question:"which is larget animal in the world?",
        answers: [
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"what is your hobbi?",
        answers : [
            {text:"palying",correct:false},
            {text:"Dancing",correct:false},
            {text:"listening",correct:true},
            {text:"study",correct:false},
        ]   
    },
    {
        question:"which vegetable are you buying?",
        answers : [
            {text:"gobhi",correct:false},
            {text:"Bindi",correct:false},
            {text:"Emali",correct:false},
            {text:"Garlic",correct:true},
        ]
    },
    {
        question:"which is the smallest continent in the world?",
        answers : [
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"africa",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function starQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}