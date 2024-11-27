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
    nextBtn.addEventListener('click', ()=>{
        questionIndex++;
        if(questionIndex<questions.length){
            showQuestion();
        }
        else{
            showResult();
        }    
    });
    restartBtn.addEventListener('click', () => {
        questionIndex = 0;
        score = 0;
        startQuiz();
    });

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[questionIndex].question;
        choiceList.innerHTML = "";
        questions[questionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => checkAnswer(choice));
            choiceList.appendChild(li);
        })
    }

    function checkAnswer(choice){
        const correctAnswer = questions[questionIndex].answer;
        if(choice === correctAnswer){
            score++;
        }
        disabledList();
        nextBtn.classList.remove("hidden");
    }

    function disabledList(){
        const allChoices = document.querySelectorAll("#choice-list li");
        allChoices.forEach((li) => {
            li.classList.add('disabled');
            li.style.pointerEvents = "none";
        });
    }

    function showResult(){
        resultContainer.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

})