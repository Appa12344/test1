const questions =[
    {
        question:"what type of css is the following code ?",
        answers: [
            { text: "Inline", correct: true },
            { text: "External", correct: false },
            { text: "Internal", correct: false },
            { text: "Non of above", correct: false },
        ]
    },
    {
        question:"Which gradients define the color by their center ?",
        answers: [
            { text: "Linear gradient", correct: false },
            { text: "Conic gradient", correct: false },
            { text: "Radial gradient", correct: true },
            { text: "Both A and B", correct: false },
        ]

    },
    {
        question:"Which of the following is used to pass points to draw a polygon ?",
        answers: [
            { text: "Point", correct: true },
            { text: "Path", correct: false },
            { text: "d", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question:"SVG define the graphics in_________format ?",
        answers: [
            { text: "HTML", correct: false },
            { text: "PHP", correct: false },
            { text: "ASP", correct: false },
            { text: "XML", correct: true },
        ]
    },
    {
        question:"The X1 attribute define the_______of the line on the x-axis ?",
        answers: [
            { text: "End", correct: false },
            { text: "Start", correct: true },
            { text: "Middle", correct: false },
            { text: "Same Point", correct: false },
        ]
    },
    {
        question:"Which of the following is true about SVG ?",
        answers: [
            { text: "SVG is intended to display images over the web.", correct: false},
            { text: "Being vector images.SVG image never loses quality no matter how they are zoomed out or resized.", correct: false },
            { text: "SVG images supports interactivity and animation.", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question:"Which shap is use to create a gradient ?",
        answers: [
            { text: "circle", correct: false },
            { text: "ellipes", correct: true },
            { text: "Rectangle", correct: false },
            { text: "Non of above", correct: false },
        ]
    },
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
    let questionsNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionsNo +". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
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
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = '********************End the Quiz**********************';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
}
)
    

startQuiz();