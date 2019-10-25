class QandA {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}

const allQuestions = [
    new QandA("Which running back pulled a fire alarm of a Hampton Inn after losing his key to his Hampton Inn suite?",
        ["Adrian Peterson", "Derrick Henry", "Mark Ingram", "Dion Lewis"],
        "Dion Lewis"),
    new QandA("After celebrating a little too hard the year of his Superbowl win, which smart guy accidently shot himself in his thigh?",
        ["Lawrence Taylor", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski"],
        "Plaxico Burress"),
    new QandA("Which former player got arrested for stealing bottles of beer from a deli?",
        ["Brett Favre", "Mike Vrabel", "Michael Vick", "Jason Garrett"],
        "Mike Vrabel"),
    new QandA("Which smooth operating Viking rented a boat Lake Minetonka for him and 17 other teammatesin 2005 with about 100 prostitutes and made these 'transactions' in front of the boat crew members?",
        ["Fred Smoot", "Daunte Culpepper", "Jermaine Wiggins", "Troy Williamson"],
        "Fred Smoot"),
    new QandA("After one too many bourbons and kicked out of one too many frat parties, which big 'football' guy and party fiend got charged with hitting and threating his ex-girlfriend in Dallas?",
        ["Demaryius Thomas", "Terell Suggs", "Michael Bennett", "Johnny Manziel"],
        "Johnny Manziel"),
    new QandA("This receiver decided to take an illegal u-turn. Pretty mild, huh? Wait for it. Which ballsy boy decided that the best move was to actually bump the policewoman enough so that she fell over?",
        ["Odell Beckham Jr.", "Shaun Rogers", "Randy Moss", "JaMarcus Russell"],
        "Randy Moss"),
    new QandA("Which unortunate former RB for the Vikings got put in handcuffs at the airport for carrying dried urine and a Whizzinator? Hm? What's a Whizzinator, you ask? Why, it is a device that turns dried urine into liquid urine.",
        ["Wes Welker", "Onterrio Smith", "Cedric Benson", "Fran Tarkenton"],
        "Onterrio Smith"),
    new QandA("Which former cornerback started throwing upper cuts to the jaw of the bouncer outside of the club who wouldn't let him in         until he put his pants above his knees?",
        ["Jason Sehorn", "Richard Sherman", "Deion Sanders", "Cedric Griffin"],
        "Cedric Griffin")
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
            optionsContainer[i].style.pointerEvent = "none"
            if (optionsContainer[i].innerText == allQuestions[currentRound].answer) {
                currentRound++
                comments.innerText = "Correct"
                nextButton.style.visibility = "visible"
                points++

            } else {
                currentRound++
                comments.innerText = "Incorrect"
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
        // optionsContainer[i].forEach((e) => {
        //     e.target.style.pointerEvent = "auto"
        // })
        console.log(currentRound)
    })
}


function endTrivia() {
    if (currentRound === allQuestions.length) {
        container.innerText = `ALL DONE! You scored ${points} out of ${allQuestions.length}`
        // try to do this with a loop or .forEach()
        optionsContainer[0].innerText = " "
        optionsContainer[1].innerText = " "
        optionsContainer[2].innerText = " "
        optionsContainer[3].innerText = " "
        comments.innerText = " "
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