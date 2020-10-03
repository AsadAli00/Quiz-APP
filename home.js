window.onload = function () {
    welcome()
}


// question and answer in object

var questions = [{
    id: 1,
    question: "Urdu was declared national language of Pakistan in?",
    answer: "April 1954",
    options: [
        "April 1950",
        "April 1955",
        "April 1954",
        "April 1952"
    ]


},
{
    id: 2,
    question: "In which province maximum languages are spoken?",
    answer: "Balochistan",
    options: [
        "Sindh",
        "Punjab",
        "Balochistan",
        "Khyber PK"
    ]

},
{
    id: 3,
    question: "Who wrote the national anthem of Pakistan?",
    answer: "Hafeez Jullundari",
    options: [
        "Allama Iqbal",
        "Hafeez Jullundari",
        "Mirza Adeeb",
        "Sagar"
    ]

},
{
    id: 4,
    question: "When was the national anthem of Pakistan first played?",
    answer: "13th August 1954",
    options: [
        "14th August 1948",
        "13th August 1954",
        "14th August 1950",
        "23rd March 1949"
    ]

},
{
    id: 5,
    question: "How many words are in national anthem?",
    answer: "50",
    options: [
        "16",
        "50",
        "37",
        "67"
    ]

},
{
    id: 6,
    question: "What is the height of Nanga Parbat?",
    answer: "26660 feet",
    options: [
        "26660 feet",
        "27512 feet",
        "27815 feet",
        "28214 feet"
    ]

},
{
    id: 7,
    question: "Which river flows through the Salt Range?",
    answer: "River soan",
    options: [
        "River Gomal",
        "River Zobe",
        "River Swat",
        "River soan"
    ]

},
{
    id: 8,
    question: "In which year, Mangla Dam became operational?",
    answer: "1967",
    options: [
        "1964",
        "1965",
        "1966",
        "1967"
    ]

},
{
    id: 9,
    question: "What was the number of sugar mills in Pakistan in 1947?",
    answer: "Nine",
    options: [
        "Nine",
        "Fifteen",
        "Twenty",
        "Thirty"
    ]

},
{
    id: 10,
    question: "Which are is famous for Tilli Shawals and Pashmina?",
    answer: "Kashmir",
    options: [
        "Karachi",
        "Peshawar",
        "Kashmir",
        "Lahore"
    ]

}




]

var question_count = 0;

function welcome() {
    let ques = document.getElementById('question')
    ques.innerHTML = `<h1>Welcome To Quiz </h1>`
    let button = document.getElementById('button')
    button.innerHTML = `<button class="btn btn-outline-secondary" onclick="start()">Start</button>`
}
var min = 0;
var sec = 0;


var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
function timer() {
    sec++
    secHeading.innerHTML = sec;
    if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0
    }
    else if (min >= 5) {
        finish();
    }

}
var interval;
function start() {
    interval = setInterval(timer, 1000);
    show(0)
}

function next() {
    let option1 = document.querySelectorAll("li.option")
    for (let i = 0; i < option1.length; i++) {
        if (option1[i].classList.contains("active")) {
            console.log(option1[i])
            if (option1[i].childNodes[0].nodeValue === questions[question_count].answer) {
                result++
            }

        }
    }
    
    question_count++
    if (question_count >= '9') {
        var ques = document.getElementById('question')
        ques.innerHTML = `<h1> Q${questions[9].id} ${questions[9].question} </h1>
        <ul class="list">
                            <li class="option">${questions[9].options[0]}</li>
                            <li class="option">${questions[9].options[1]}</li>
                            <li class="option">${questions[9].options[2]}</li>
                            <li class="option">${questions[9].options[3]}</li>
                        </ul>`
        let button = document.getElementById('button')
        button.innerHTML = `<button class="btn btn-outline-secondary " onclick="finish()">Finish</button>`
        Active()


    }
    else {
        show(question_count)
    }
}

var result = 0;
function finish() {
   next()
    if (result >= 5) {

        let ques = document.getElementById('question')
        ques.innerHTML = `<div class="result"><h1>RESULT</h1> <h1>Congratulations</h1> <br> <h2> Score= ${result}</h2>  <br> <h2>score out of ${questions.length}</h2> <h2>Passed</h2></div>`
        let button = document.getElementById('button')
        button.innerHTML = ""
    }
    else {
        let ques = document.getElementById('question')
        ques.innerHTML = `<div class="result"><h1>RESULT</h1> <h1>Try Again</h1> <h2> Score= ${result}</h2> <h2>score out of ${questions.length}</h2> <h2>Failed</h2></div>`
        let button = document.getElementById('button')
        button.innerHTML = ""
    }
    clearInterval(interval)
    min = 0;
    sec = 0;

    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
   
}



function show(e) {
    var ques = document.getElementById('question')
    ques.innerHTML = `<h1> Q${questions[e].id} ${questions[e].question} </h1>
    <ul class="list">
                        <li class="option">${questions[e].options[0]}</li>
                        <li class="option">${questions[e].options[1]}</li>
                        <li class="option">${questions[e].options[2]}</li>
                        <li class="option">${questions[e].options[3]}</li>
                    </ul>`
    let button = document.getElementById('button')
    button.innerHTML = `<button class="btn btn-outline-secondary " onclick="next()">NEXT QUESTION</button>`
    Active()

}


function Active() {
    let option1 = document.querySelectorAll("li.option")

    for (let i = 0; i < option1.length; i++) {
        option1[i].onclick = function () {
            for (let j = 0; j < option1.length; j++) {
                if (option1[j].classList.contains("active")) {
                    option1[j].classList.remove("active")
                }

            }
            option1[i].classList.add("active")
        }
    }

}
function logout(){
    firebase.auth().signOut().then(function() {
        console.log("sucessful logout")
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      window.location = "index.html"
}
