console.log("H,,,")
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
