class QandA {
    constructor(question, options, answer){
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}

const allQuestions = [
    new QandA("After celebrating a little too hard the year he won a Super Bowl ring in 2008, this guy accidently SHOT HIMSELF (yes really shot himself) in his thigh while readjusting the gun in his pocket. OH, also the gun had no permit.",
    ["Lawrence Taylor", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski"], 
    "Plaxico Burress"),
    new QandA("Which smooth operating Viking rented a boat Lake Minetonka for him and 17 other smooth operating teammates in 2005 with about 100 prostitutes, most of which were doin' their thang with the players in front of hired crew members.",
    ["Fred Smoot",  "Daunte Culpepper", "Jermaine Wiggins", "Troy Williamson"],
    "Fred Smoot"),
    new QandA("After one too many bourbons and kicked out of one too many frat parties, which big 'football' guy and party fiend got charged with hitting and threating his ex-girlfriend in Dallas?",
    ["Demaryius Thomas", "Terell Suggs", "Michael Bennett", "Johnny Manziel"],
    "Johnny Manziel"),
    new QandA("This receiver decided to take an illegal u-turn. Pretty mild, huh? Wait for it. Which ballsy boy decided that the best move was to actually bump the policewoman enough so that she fell over?",
    ["Odell Beckham Jr.", "Shaun Rogers", "Randy Moss",  "JaMarcus Russell"],
    "Randy Moss"),
    new QandA("Which unortunate former RB for the Vikings got put in handcuffs at the airport for carrying dried urine and a Whizzinator? Hm? What's a Whizzinator, you ask? Why, it is a device that turns dried urine into liquid urine.",
    ["Wes Welker", "Onterrio Smith",  "Cedric Benson", "Fran Tarkenton"],
    "Onterrio Smith")
];

const playButton = document.querySelector(".play");
const container = document.querySelector(".container");
let currentRound = 0;
const nextButton = document.querySelector(".nextButton")
const optionsContainer = document.querySelectorAll(".optionsContainer")
let currentQuestion = allQuestions[currentRound].question;
let comments = document.querySelector(".comments")
let points = 0;
const tryAgain = document.querySelector(".tryAgain")

playButton.addEventListener("click", (e) => {
    container.innerText = allQuestions[currentRound].question
    optionsContainer[0].innerText = allQuestions[currentRound].options[0]
    optionsContainer[1].innerText = allQuestions[currentRound].options[1]
    optionsContainer[2].innerText = allQuestions[currentRound].options[2]
    optionsContainer[3].innerText = allQuestions[currentRound].options[3]
})

for (let i = 0; i < optionsContainer.length; i++){
    optionsContainer[i].addEventListener("click", (e) => {
        if(optionsContainer[i].innerText == allQuestions[currentRound].answer){
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
nextButton.addEventListener("click", (e) =>{
    endTrivia()
    nextButton.style.visibility = "hidden"
    comments.innerText = " "
    container.innerText = allQuestions[currentRound].question
    optionsContainer[0].innerText = allQuestions[currentRound].options[0]
    optionsContainer[1].innerText = allQuestions[currentRound].options[1]
    optionsContainer[2].innerText = allQuestions[currentRound].options[2]
    optionsContainer[3].innerText = allQuestions[currentRound].options[3]
    console.log(currentRound)
    })
    

function endTrivia(){
    if(currentRound === allQuestions.length){
        container.innerText = `ALL DONE! You scored ${points} out of ${allQuestions.length}`
        optionsContainer[0].innerText = " "
        optionsContainer[1].innerText = " "
        optionsContainer[2].innerText = " "
        optionsContainer[3].innerText = " "
        comments.innerText = " "
        // tryAgain.style.visibility =  "visible"
        // nextButton.style.visibility = "hidden"
    }
}

tryAgain.addEventListener("click", (e)=>{
    let currentRound = 0;
    container.innerText = allQuestions[currentRound].question
    optionsContainer[0].innerText = allQuestions[currentRound].options[0]
    optionsContainer[1].innerText = allQuestions[currentRound].options[1]
    optionsContainer[2].innerText = allQuestions[currentRound].options[2]
    optionsContainer[3].innerText = allQuestions[currentRound].options[3]
})