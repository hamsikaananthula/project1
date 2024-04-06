const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
                {text:"shark", correct:false},
                {text:"Blue Whale", correct:true},
                {text:"Elephant", correct:false},
                {text:"Girafee", correct:false},
            ]
        
    },
    {
        question:"Which is the Smallest Continent in the world?",
        answers:[
                {text:"Asia", correct:false},
                {text:"Australia",correct:true},
                {text:"Arctic", correct:false},
                {text:"Africa", correct:false},
            ]
 
    },
    {
        question:"Which river is the longest in the world?",
        answers:[
                {text:"Amazon", correct:false},
                {text:"Mississippi", correct:false},
                {text:"Nile", correct:true},
                {text:"Yangtze", correct:false},
            ]
 
    },
            
    {
        question:"What is the largest lake in the world?",
        answers:[
                {text:"Caspian Sea", correct:false},
                {text:"Baikal", correct:true},
                {text:"Lake Superior", correct:false},
                {text:"Ontario", correct:false},
            ]
 
    },
    {
        question:"Which planet in the solar system is known as the “Red Planet”?",
        answers:[
                {text:"Venus", correct:false},
                {text:"Earth", correct:false},
                {text:"Mars", correct:true},
                {text:"Jupiter", correct:false},
            ]
 
    }
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-button");
const nextbutton=document.getElementById("next-btn");
let currentquestionindex=0;
let score=0;
function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentquestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    questionElement.innerHTML=questionNo+". "+currentquestion.question;
    currentquestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectanswer(e){
  const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
   Array.from(answerbuttons.children).forEach(button=>{
      if(button.dataset.correct==="true"){
        button.classList.add("correct");
      }
      button.disabled=true;

   });
   nextbutton.style.display="block";
}
function showscore(){
    resetstate();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play Again";
    nextbutton.style.display="block";
}
function handlenextButton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showQuestion();
    }
    else{
         showscore();
    }
}
nextbutton.addEventListener("click",()=>{
      if(currentquestionindex<questions.length){
          handlenextButton();
      }
      else{
        startquiz();
      }
});

startquiz();



