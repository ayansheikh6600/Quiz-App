console.log("H,,,")


const quesArray = [
    {
        num: 1,
        question: "Explicit casting is used to:",
        Option: {
            a: "Convert types implicitly",
            b: "Convert types explicitly",
            c: "Define types",
            d: "Remove types",
        },
        answer: "Convert types explicitly"
    },
    {
        num: 2,
        question: "Which of the following is an example of explicit casting?",
        Option: {
            a: "let num: number = '5';",
            b: "let num = '5';",
            c: "let num: number = <number>'5';",
            d: "let num: number;",
        },
        answer: "let num: number = <number>'5';"
    },
    {
        num: 3,
        question: "How do you cast a variable to a string in TypeScript?",
        Option: {
            a: "<string>variable",
            b: "string(variable)",
            c: "String(variable)",
            d: "variable as string",
        },
        answer: "variable as string"
    },
    {
        num: 4,
        question: "Which syntax is used for explicit casting in TypeScript?",
        Option: {
            a: "variable as type",
            b: "<type>variable",
            c: "Both A and B",
            d: "None of the above",
        },
        answer: "Both A and B"
    },
    {
        num: 5,
        question: "What is the purpose of explicit casting?",
        Option: {
            a: "To avoid runtime errors",
            b: "To enhance code readability",
            c: "To enforce type checking",
            d: "To allow type conversion",
        },
        answer: "To allow type conversion"
    },
    {
        num: 6,
        question: "What is an enum in TypeScript?",
        Option: {
            a: "A function",
            b: "A class",
            c: "A named constant",
            d: "A type alias",
        },
        answer: "A named constant"
    },
    {
        num: 7,
        question: "Which syntax correctly defines an enum in TypeScript?",
        Option: {
            a: "enum Colors {Red, Green, Blue}",
            b: "const Colors {Red, Green, Blue}",
            c: "type Colors = {Red, Green, Blue}",
            d: "interface Colors {Red, Green, Blue}",
        },
        answer: "enum Colors {Red, Green, Blue}"
    },
    {
        num: 8,
        question: "How do you access the value of an enum in TypeScript?",
        Option: {
            a: "Colors[0]",
            b: "Colors.Red",
            c: "Colors['Red']",
            d: "Colors{Red}",
        },
        answer: "Colors.Red"
    },
    {
        num: 9,
        question: "Enums in TypeScript can have:",
        Option: {
            a: "Only numeric values",
            b: "Only string values",
            c: "Both numeric and string values",
            d: "No values",
        },
        answer: "Both numeric and string values"
    },
    {
        num: 10,
        question: "What is the default value of the first enum member if not initialized?",
        Option: {
            a: "1",
            b: "0",
            c: "undefined",
            d: "null",
        },
        answer: "0"
    },
    {
        num: 11,
        question: "Which of the following is a correct way to define a const enum?",
        Option: {
            a: "enum Colors {Red, Green, Blue}",
            b: "const enum Colors {Red, Green, Blue}",
            c: "enum Colors = {Red, Green, Blue}",
            d: "const Colors = {Red, Green, Blue}",
        },
        answer: "const enum Colors {Red, Green, Blue}"
    },
    {
        num: 12,
        question: "Why are const enums used?",
        Option: {
            a: "To ensure enums are not modified",
            b: "To optimize performance",
            c: "To avoid naming conflicts",
            d: "To support string values",
        },
        answer: "To optimize performance"
    },
    {
        num: 13,
        question: "Which statement about const enums is true?",
        Option: {
            a: "They can be modified at runtime",
            b: "They are removed during compilation",
            c: "They support computed members",
            d: "They can't be used in switch statements",
        },
        answer: "They are removed during compilation"
    },
    {
        num: 14,
        question: "What is an array in TypeScript?",
        Option: {
            a: "A type of function",
            b: "A collection of values",
            c: "A named constant",
            d: "A type alias",
        },
        answer: "A collection of values"
    },
    {
        num: 15,
        question: "How do you declare an array of numbers in TypeScript?",
        Option: {
            a: "let arr: number[];",
            b: "let arr: Array<number>;",
            c: "Both A and B",
            d: "None of the above",
        },
        answer: "Both A and B"
    },
    {
        num: 16,
        question: "Which method adds an element to the end of an array?",
        Option: {
            a: "pop()",
            b: "push()",
            c: "shift()",
            d: "unshift()",
        },
        answer: "push()"
    },
    {
        num: 17,
        question: "Which method removes the last element of an array?",
        Option: {
            a: "pop()",
            b: "push()",
            c: "shift()",
            d: "unshift()",
        },
        answer: "pop()"
    },
    {
        num: 18,
        question: "Which method merges two or more arrays?",
        Option: {
            a: "concat()",
            b: "join()",
            c: "slice()",
            d: "splice()",
        },
        answer: "concat()"
    },
    {
        num: 19,
        question: "How do you define a function in TypeScript?",
        Option: {
            a: "function name() {}",
            b: "let name = function() {}",
            c: "let name = () => {}",
            d: "All of the above",
        },
        answer: "All of the above"
    },
    {
        num: 20,
        question: "What is an optional parameter in TypeScript?",
        Option: {
            a: "A parameter that must be provided",
            b: "A parameter that is optional",
            c: "A parameter with a default value",
            d: "A parameter that can be null",
        },
        answer: "A parameter that is optional"
    },
    {
        num: 21,
        question: "How do you define an optional parameter in TypeScript?",
        Option: {
            a: "parameter?: type",
            b: "parameter: type?",
            c: "parameter: type | undefined",
            d: "parameter: type | null",
        },
        answer: "parameter?: type"
    },
    {
        num: 22,
        question: "What is a default parameter in TypeScript?",
        Option: {
            a: "A parameter that must be provided",
            b: "A parameter that is optional",
            c: "A parameter with a default value",
            d: "A parameter that can be null",
        },
        answer: "A parameter with a default value"
    },
    {
        num: 23,
        question: "How do you define a default parameter in TypeScript?",
        Option: {
            a: "parameter: type = value",
            b: "parameter?: type = value",
            c: "parameter = value: type",
            d: "parameter?: type | value",
        },
        answer: "parameter: type = value"
    },
    {
        num: 24,
        question: "What is a rest parameter in TypeScript?",
        Option: {
            a: "A parameter that must be provided",
            b: "A parameter that is optional",
            c: "A parameter that takes multiple values",
            d: "A parameter with a default value",
        },
        answer: "A parameter that takes multiple values"
    },
    {
        num: 25,
        question: "How do you define a rest parameter in TypeScript?",
        Option: {
            a: "...parameter: type[]",
            b: "parameter: type[]",
            c: "...parameter: type",
            d: "parameter: ...type",
        },
        answer: "...parameter: type[]"
    },
    {
        num: 26,
        question: "What does async keyword do in TypeScript?",
        Option: {
            a: "Makes a function synchronous",
            b: "Makes a function asynchronous",
            c: "Creates a new thread",
            d: "Stops code execution",
        },
        answer: "Makes a function asynchronous"
    },
    {
        num: 27,
        question: "What does the await keyword do?",
        Option: {
            a: "Waits for a promise to resolve",
            b: "Makes a function asynchronous",
            c: "Creates a new thread",
            d: "Stops code execution",
        },
        answer: "Waits for a promise to resolve"
    },
    {
        num: 28,
        question: "How do you define a promise in TypeScript?",
        Option: {
            a: "let promise = new Promise()",
            b: "function promise() {}",
            c: "interface Promise {}",
            d: "None of the above",
        },
        answer: "None of the above"
    },
    {
        num: 29,
        question: "How do you handle errors in promises?",
        Option: {
            a: ".then().catch()",
            b: "try...catch",
            c: "finally",
            d: "All of the above",
        },
        answer: "All of the above"
    },
    {
        num: 30,
        question: "What is the output of the following code: console.log(typeof [])?",
        Option: {
            a: "array",
            b: "object",
            c: "undefined",
            d: "number",
        },
        answer: "object"
    }
];


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
// console.log(liParent)
/// Result Element Get
var result = document.querySelector(".result")
var resulImg = document.querySelector(".resultImg")
var score = document.querySelector(".score")
var passPercentage = document.querySelector(".passPercentage")
var failPercentage = document.querySelector(".failPercentage")
var failPara = document.querySelector(".failPara")

var passPara = document.querySelector(".passPara")
var testTimer = document.getElementById("testTimer")
var showFullName = document.getElementById("fullName")
var userEmail = document.querySelector(".userEmail")
var currentQuestionNum = document.getElementById("currentQuestionNum")
var totalQuestion = document.getElementById("totalQuestion")

var timeSecond = 30 * 60;

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
    var contactInput = document.querySelector(".contactInput").value
    inputUserEmail= inputUserEmail.toLowerCase()
    var fullName = inputFirstName +" "+ inputLastName

    
    showFullName.innerHTML = fullName;
    userEmail.innerHTML = inputUserEmail;
    quizWrapper.style.display = "none"
    startBtn.style.display = "flex"

    var userInfo = {
        firstName: inputFirstName,
        lastName: inputLastName,
        email: inputUserEmail,
        fullName: fullName,
        date: AcurateDate,
        time: time,
        contactInput : contactInput
    };

    console.log(userInfo);

    localStorage.setItem("user" , JSON.stringify(userInfo))

}




// var formData = new FormData();
//             formData.append('entry.1234567890', userInfo.firstName); // Replace with your actual field ID
//             formData.append('entry.0987654321', userInfo.lastName);  // Replace with your actual field ID
//             formData.append('entry.1122334455', userInfo.email);     // Replace with your actual field ID
//             formData.append('entry.2233445566', userInfo.fullName);  // Replace with your actual field ID
//             formData.append('entry.3344556677', userInfo.date);      // Replace with your actual field ID
//             formData.append('entry.4455667788', userInfo.time);      // Replace with your actual field ID
//             formData.append('entry.5566778899', userInfo.score);     // Replace with your actual field ID
//             formData.append('entry.6677889900', userInfo.percentage);// Replace with your actual field ID



var counter = 0;
var CorrectAnsCounter = 0;
var WrongAnsCounter = 0;
var TotalScore = 0;
var totalMark = quesArray.length * 5
var percentage;




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
            failPercentage.innerHTML = percentage
            resulImg.src = "Assets/fail-01.png"
        }


        var formData = new FormData();
            formData.append('entry.1096513471', userInfo.firstName); // Replace with your actual field ID
            formData.append('entry.989854716', userInfo.lastName);  // Replace with your actual field ID
            formData.append('entry.125434187', userInfo.email);     // Replace with your actual field ID
            formData.append('entry.1758752028', userInfo.fullName);  // Replace with your actual field ID      // Replace with your actual field ID
            formData.append('entry.535285977', userInfo.time);      // Replace with your actual field ID
            formData.append('entry.262909145', userInfo.score);     // Replace with your actual field ID
            formData.append('entry.586032431', userInfo.percentage);
            formData.append('entry.6398937', userInfo.contactInput);

            const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvYtL17w22A996zDGCQtjY6ZlCSNd2wSuhF8dGX3DvzpLQKw/formResponse"


            fetch(formUrl, {
                method: "POST",
                mode: "no-cors", // You can't handle the response directly due to CORS restrictions
                headers: {
                  "Content-Type": "text/html; charset=utf-8"
                },
                body: formData
              })
              .then(response => console.log("Form submitted successfully"))
              .catch(error => console.error("Error submitting form", error));
            



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
        currentQuestionNum.innerText = counter + 1
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

        var userInfo = JSON.parse(localStorage.getItem("user"))

        userInfo.score = TotalScore
        userInfo.totalMark = totalMark
        userInfo.percentage = percentage

        // console.log(userinfo, "par");

        


        if (percentage >= 70) {
            passPercentage.innerHTML = percentage
            passPara.style.display = "block"
        } else {
            failPara.style.display = "block"
            failPercentage.innerHTML = percentage
            resulImg.src = "Assets/fail-01.png"
        }

        var formData = new FormData();
            formData.append('entry.1096513471', userInfo.firstName); // Replace with your actual field ID
            formData.append('entry.989854716', userInfo.lastName);  // Replace with your actual field ID
            formData.append('entry.125434187', userInfo.email);     // Replace with your actual field ID
            formData.append('entry.1758752028', userInfo.fullName);  // Replace with your actual field ID      // Replace with your actual field ID
            formData.append('entry.535285977', userInfo.time);      // Replace with your actual field ID
            formData.append('entry.262909145', userInfo.score);     // Replace with your actual field ID
            formData.append('entry.586032431', userInfo.percentage);
            formData.append('entry.6398937', userInfo.contactInput);

            const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvYtL17w22A996zDGCQtjY6ZlCSNd2wSuhF8dGX3DvzpLQKw/formResponse"


            fetch(formUrl, {
                method: "POST",
                mode: "no-cors", // You can't handle the response directly due to CORS restrictions
                headers: {
                  "Content-Type": "text/html; charset=utf-8"
                },
                body: formData
              })
              .then(response => console.log("Form submitted successfully"))
              .catch(error => console.error("Error submitting form", error));
            }

    }
    currentQuestionNum.innerHTML = counter + 1




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


