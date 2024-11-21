document.addEventListener('DOMContentLoaded', ()=>{
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choiceList = document.getElementById("choice-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",   
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare"
        }  
    ]      

    let questionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    
})