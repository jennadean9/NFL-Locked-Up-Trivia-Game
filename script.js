class QandA {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}

const allQuestions = [
    new QandA("Which running back pulled a fire alarm after losing his key leaving himself locked out of his Hampton Inn suite?",
        ["Adrian Peterson", "Derrick Henry", "Mark Ingram", "Dion Lewis"],
        "Dion Lewis"),
    new QandA("After celebrating a little too hard the year of his Superbowl win, which smart guy accidently shot himself in his thigh at a nightclub?",
        ["Lawrence Taylor", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski"],
        "Plaxico Burress"),
    new QandA("Which former player got arrested for stealing bottles of beer from a deli?",
        ["Brett Favre", "Mike Vrabel", "Michael Vick", "Jason Garrett"],
        "Mike Vrabel"),
    new QandA("Which smooth operating Viking rented a boat on Lake Minetonka for him and 17 other teammates with about 100 prostitutes and made 'transactions' with the women in front of the boat crew members?",
        ["Fred Smoot", "Daunte Culpepper", "Jermaine Wiggins", "Troy Williamson"],
        "Fred Smoot"),
    new QandA("After one too many bourbons, which big 'football' guy and party fiend got charged with hitting and threating his ex-girlfriend in Dallas?",
        ["Demaryius Thomas", "Terell Suggs", "Michael Bennett", "Johnny Manziel"],
        "Johnny Manziel"),
    new QandA("Which receiver took an illegal u-turn, and then bumped and knocked over the policewoman that got out of her car to stop him?",
        ["Odell Beckham Jr.", "Shaun Rogers", "Randy Moss", "JaMarcus Russell"],
        "Randy Moss"),
    new QandA("Which unortunate former RB for the Vikings got put in handcuffs at the airport for carrying dried urine and a Whizzinator? What's a Whizzinator, you ask? Why, it is a device that turns dried urine into liquid urine.",
        ["Wes Welker", "Onterrio Smith", "Cedric Benson", "Fran Tarkenton"],
        "Onterrio Smith"),
    new QandA("Which former cornerback started throwing upper cuts to the jaw of the bouncer outside of the club who wouldn't let him in         until he put his pants above his knees?",
        ["Jason Sehorn", "Richard Sherman", "Deion Sanders", "Cedric Griffin"],
        "Cedric Griffin"),
    new QandA("Which former DT has an extensive history with violent traffic incidents, including a reckless boating charge?",
        ["Albert Haynesworth", "Warren Sapp", "Richard Seymour", "Justin Smith"],
        "Albert Haynesworth"),
    new QandA("Which former Cowboy's Lamborghini was found abandoned after hitting a pole, and then found and arrested while he was riding an electric scoooter?",
        ["Dez Bryant", "Roger Staubach", "Terrance Williams", "Cole Beasley"],
        "Terrance Williams")

];
const body = document.querySelector("body")
const header = document.querySelector("header")
const main = document.querySelector("main")
const section = document.querySelector("section")
const playButton = document.querySelector(".play");
const container = document.querySelector(".question-container");
const nextButton = document.querySelector(".next-button")
const optionsContainer = document.querySelectorAll(".options")
const comments = document.querySelector(".comments")
const tryAgain = document.querySelector(".try-again")
const subtitle = document.querySelector("h2")
const title = document.querySelector("h1")
const results = document.querySelector(".results")
let currentRound = 0;
let currentQuestion = allQuestions[currentRound].question;
let points = 0;

section.addEventListener("animationstart", (e) => {
    console.log("Animtation has start");
    title.classList.remove("center-position")
})

function startGame() {
    playButton.addEventListener("click", (e) => {
        container.innerText = allQuestions[currentRound].question
        // try to do this with a loop or .forEach()
        optionsContainer[0].innerText = allQuestions[currentRound].options[0]
        optionsContainer[1].innerText = allQuestions[currentRound].options[1]
        optionsContainer[2].innerText = allQuestions[currentRound].options[2]
        optionsContainer[3].innerText = allQuestions[currentRound].options[3]
        playButton.style.visibility = "hidden"
        subtitle.style.display = "none"
        main.style.display = "block"
        section.style.display = "none"

    })

}

function chooseAnswer() {
    for (let i = 0; i < optionsContainer.length; i++) {
        optionsContainer[i].addEventListener("click", (e) => {
            for (let j = 0; j < optionsContainer.length; j++) {
                optionsContainer[j].style.pointerEvents = "none"
            }
            if (optionsContainer[i].innerText == allQuestions[currentRound].answer) {
                currentRound++
                comments.innerText = "Correct"
                nextButton.style.visibility = "visible"
                points++

            } else {
                currentRound++
                comments.innerText = `Incorrect. It was ${allQuestions[currentRound - 1].answer}!`
                nextButton.style.visibility = "visible"
            }
        })
    }
}
function hitNext() {
    nextButton.addEventListener("click", (e) => {
        endTrivia()
        nextButton.style.visibility = "hidden"
        comments.innerText = " "
        container.innerText = allQuestions[currentRound].question
        // try to do this with a loop or .forEach() 
        optionsContainer[0].innerText = allQuestions[currentRound].options[0]
        optionsContainer[1].innerText = allQuestions[currentRound].options[1]
        optionsContainer[2].innerText = allQuestions[currentRound].options[2]
        optionsContainer[3].innerText = allQuestions[currentRound].options[3]
        for (let j = 0; j < optionsContainer.length; j++) {
            optionsContainer[j].style.pointerEvents = "auto"
        }
        console.log(currentRound)
    })
}


function endTrivia() {
    if (currentRound === allQuestions.length) {
        container.innerText = `You've completed your sentence! You scored ${points} out of ${allQuestions.length} points`
        // try to do this with a loop or .forEach()
        optionsContainer[0].innerText = " "
        optionsContainer[1].innerText = " "
        optionsContainer[2].innerText = " "
        optionsContainer[3].innerText = " "
        comments.style.display = "none"
        tryAgain.style.visibility = "visible"
        nextButton.style.visibility = "hidden"

    }
}

function goAgain() {
    tryAgain.addEventListener("click", (e) => {
        window.location.reload();
    })
}

startGame()
chooseAnswer()
hitNext()
endTrivia()
goAgain()