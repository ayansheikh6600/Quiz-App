console.log("H,,,")


var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        Option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        Option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    }
    // {
    //     num: 3,
    //     question: "The 'function' and  'var' are known as:",
    //     Option: {
    //         a: "Keywords",
    //         b: "Data types",
    //         c: "Declaration statements",
    //         d: "Prototypes",

    //     },
    //     answer: "Declaration statements"
    // }
    // ,
    // {
    //     num: 4,
    //     question: "who is the present president of pakistan",
    //     Option: {
    //         a: "Arif Alvi",
    //         b: "Imran Khan",
    //         c: "Nawaz Sharif",
    //         d: "Zardari",

    //     },
    //     answer: "Arif Alvi"
    // }
    // ,
    // {
    //     num: 5,
    //     question: "How many prayers in a day:",
    //     Option: {
    //         a: "6",
    //         b: "5",
    //         c: "3",
    //         d: "none",

    //     },
    //     answer: "5"
    // },
    // {
    //     num: 6,
    //     question: "How many total surah in quran",
    //     Option: {
    //         a: "113",
    //         b: "114",
    //         c: "112",
    //         d: "111",

    //     },
    //     answer: "114"
    // },
    // {
    //     num: 7,
    //     question: "The correct sequence of HTML tags for starting a webpage is",
    //     Option: {
    //         a: "Head, Title, HTML, body",
    //         b: "HTML, Body, Title, Head",
    //         c: "HTML, Head, Title, Body",
    //         d: "HTML, Title , Head,  Body",

    //     },
    //     answer: "HTML, Head, Title, Body"
    // }
]

var date = new Date

var AcurateDate = date.toDateString();
var htmlDate = document.getElementById("date")
htmlDate.value = AcurateDate;

var htmlTime = document.getElementById("time")
var time = date.toTimeString()
htmlTime.value = time

var quizWrapper = document.getElementById("quizWrapper")
var startBtn = document.querySelector(".startBtn")
var inputfeilds = quizWrapper.querySelectorAll("input")
console.log(inputfeilds)
var quizQuestion = document.querySelector(".quiz-q")

function submit() {
    for (var input of inputfeilds) {
        console.log("input", input.value)
        if (!input.value) {
            alert("Enter required fields")
            return
        }
    }

    quizWrapper.style.display = "none"
    startBtn.style.display = "flex"

}

var question = document.getElementById("question")
var ans1 = document.getElementById("ans1")
var ans2 = document.getElementById("ans2")
var ans3 = document.getElementById("ans3")
var ans4 = document.getElementById("ans4")
var timerElement = document.getElementById("timer")
var startminutes = 10;
var time = startminutes * 60;
setInterval(updatecoundowm, 1000);
function startQuiz() {
    startBtn.style.display = "none"
    quizQuestion.style.display = "flex"

    // function updatecoundowm(){
    //     const minutes = Math.floor(time/60);
    //     let seconds = time % 60;


    //     timerElement.innerHTML = ${minutes}: ${seconds};
    //     time--;
    // }



    // for (i = 0; i < quesArray.length; i++) {
    //     console.log(i)
    //     for(var key in quesArray[i]){
    //         console.log(quesArray[i].question)
    //         question.innerHTML = quesArray[i].question
    //     }
    // }

    question.innerHTML = quesArray[0].question
    ans1.innerHTML = quesArray[0].Option.a
    ans2.innerHTML = quesArray[0].Option.b
    ans3.innerHTML = quesArray[0].Option.c
    ans4.innerHTML = quesArray[0].Option.d





}



function ans(ele){
    var index = 0
}


