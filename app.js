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
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        Option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "who is the present president of pakistan",
        Option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        Option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        Option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        Option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
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
var nextBtn = document.querySelector(".nextBtn")
var question = document.getElementById("question")
var liParent = document.getElementById("liParent").children
/// Result Element Get
var result = document.querySelector(".result")
var resulImg = document.querySelector(".resultImg")
var score = document.querySelector(".score")
var passPercentage = document.querySelector(".percentage")
var failPara = document.querySelector(".failPara")
var passPara = document.querySelector(".passPara")
var testTimer = document.getElementById("testTimer")
var showFullName = document.getElementById("fullName")
var userEmail = document.querySelector(".userEmail")
var currentQuestionNum = document.getElementById("currentQuestionNum")
var totalQuestion = document.getElementById("totalQuestion")

var timeSecond = 1 * 60;

totalQuestion.innerHTML = quesArray.length

function submit() {


    for (var input of inputfeilds) {
        console.log("input", input.value)
        if (!input.value) {
            alert("Enter required fields")
            return
        }
    }
    var inputFirstName = document.querySelector(".inputFirstName").value
    var inputLastName = document.querySelector(".inputLastName").value
    var inputUserEmail = document.querySelector(".inputUserEmail").value
    inputUserEmail= inputUserEmail.toLowerCase()
    var fullName = inputFirstName +" "+ inputLastName

    
    showFullName.innerHTML = fullName;
    userEmail.innerHTML = inputUserEmail;
    quizWrapper.style.display = "none"
    startBtn.style.display = "flex"

}


var counter = 0;
var CorrectAnsCounter = 0;
var WrongAnsCounter = 0;
var TotalScore = 0;
var totalMark = quesArray.length * 5
console.log(TotalScore)




for (var li of liParent) {
    li.setAttribute("onclick", "selectOption(this)")
}
function startQuiz() {

    displayTime(timeSecond);

    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond == 0 || timeSecond < 1) {
            endCount();
            clearInterval(countDown);
        }
    }, 1000);

    function displayTime(second) {
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        testTimer.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
    }

    function endCount() {
        testTimer.innerHTML = "Time Out"
        testTimer.style.color = "red"
        quizQuestion.style.display = "none"
        result.style.display = "flex"

        score.innerHTML = TotalScore
        percentage = Math.round((TotalScore / totalMark) * 100)
        if (percentage >= 70) {
            passPercentage.innerHTML = percentage
            passPara.style.display = "block"
        } else {
            failPara.style.display = "block"
            passPercentage.innerHTML = percentage
            resulImg.src = "Assets/fail-01.png"
        }
    }

    startBtn.style.display = "none"
    quizQuestion.style.display = "flex"

    question.innerHTML = quesArray[counter].question
    liParent[0].innerHTML = quesArray[counter].Option.a
    liParent[1].innerHTML = quesArray[counter].Option.b
    liParent[2].innerHTML = quesArray[counter].Option.c
    liParent[3].innerHTML = quesArray[counter].Option.d


}

function nextQuestion() {
    for (var li of liParent) {
        li.classList.remove("liDisable")
        li.classList.remove("rigthAns")
        li.classList.remove("wrongAns")
        nextBtn.style.display = "none"
    }
    if (counter < quesArray.length - 1) {
        counter++
        question.innerHTML = quesArray[counter].question
        liParent[0].innerHTML = quesArray[counter].Option.a
        liParent[1].innerHTML = quesArray[counter].Option.b
        liParent[2].innerHTML = quesArray[counter].Option.c
        liParent[3].innerHTML = quesArray[counter].Option.d
    } else {
        quizQuestion.style.display = "none"
        result.style.display = "flex"

        score.innerHTML = TotalScore
        percentage = Math.round((TotalScore / totalMark) * 100)
        if (percentage >= 70) {
            passPercentage.innerHTML = percentage
            passPara.style.display = "block"
        } else {
            failPara.style.display = "block"
            passPercentage.innerHTML = percentage
            resulImg.src = "Assets/fail-01.png"
        }

    }
    currentQuestionNum.innerHTML = counter + 1

}


function selectOption(element) {
    nextBtn.style.display = "block"
    if (element.innerHTML === quesArray[counter].answer) {
        element.classList.add("rigthAns")
        CorrectAnsCounter++
        TotalScore = TotalScore + 5
        console.log(CorrectAnsCounter)
        console.log(TotalScore)
    } else {
        WrongAnsCounter++
        element.classList.add("wrongAns")
        for (var li of liParent) {
            console.log(li.innerHTML)
            if (li.innerHTML == quesArray[counter].answer) {
                li.classList.add("rigthAns")
                break
            }

        }


    }


    for (var li of liParent) {
        li.classList.add("liDisable")

    }
}


