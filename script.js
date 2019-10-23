const playButton = document.querySelector(".play");
var optionA = document.getElementById(optionA);
var optionB = document.getElementById(optionB);
var optionC = document.getElementById(optionC);
var optionD = document.getElementById(optionD);
let question = document.getElementById("question");
let answer = document.getElementById("answer");
const nextButton = document.querySelector(".next");
let currentRound = 0;
let points = 0;
const questionsArray = 
[
"After celebrating a little too hard the year he won a Super Bowl ring in 2008, this guy accidently SHOT HIMSELF (yes really shot himself) in his thigh while readjusting the gun in his pocket. OH, also the gun had no permit.",
"Which smooth operating Viking rented a boat Lake Minetonka for him and 17 other smooth operating teammates in 2005 with about 100 prostitutes, most of which were doin' their thang with the players in front of hired crew members.",
"After one too many bourbons and kicked out of one too many frat parties, which big 'football' guy and party fiend got charged with hitting and threating his ex-girlfriend in Dallas?",
"This receiver decided to take an illegal u-turn. Pretty mild, huh? Wait for it. Which ballsy boy decided that the best move was to actually bump the policewoman enough so that she fell over?",
"Which unortunate former RB for the Vikings got put in handcuffs at the airport for carrying dried urine and a Whizzinator? Hm? What's a Whizzinator, you ask? Why, it is a device that turns dried urine into liquid urine."
]
const possibleOptions = [
    ["Lawrence Taylor", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski"], 
    ["Fred Smoot",  "Daunte Culpepper", "Jermaine Wiggins", "Troy Williamson"],
    ["Demaryius Thomas", "Terell Suggs", "Michael Bennett", "Johnny Manziel"],
    ["Odell Beckham Jr.", "Shaun Rogers", "Randy Moss",  "JaMarcus Russell"],
    ["Wes Welker", "Onterrio Smith",  "Cedric Benson", "Fran Tarkenton"]
]
console.log(optionA, optionB, optionC, optionD)
function addRightAnswerClass(){
    possibleOptions[0][1].classList.add("rightAnswer");
    possibleOptions[1][0].classList.add("rightAnswer");
    possibleOptions[2][3].classList.add("rightAnswer");
    possibleOptions[3][2].classList.add("rightAnswer");
    possibleOptions[4][1].classList.add("rightAnswer");

}
playButton.addEventListener("click", (e) => {
    question.innerText = questionsArray[currentRound]
    optionA.innerText = possibleOptions[currentRound][0]
    optionB.innerText = possibleOptions[currentRound][1]
    optionC.innerText = possibleOptions[currentRound][2]
    optionD.innerText = possibleOptions[currentRound][3]
    addRightAnswerClass();
})

// function startTrivia(){
//         question.innerText = questionsArray[currentRound]
//         optionSeen[0].innerText = possibleOptions.currentRound[0].name
//         optionSeen[1].innerText = possibleOptions.currentRound[1].name
//         optionSeen[2].innerText = possibleOptions.currentRound[2].name
//         optionSeen[3].innerText = possibleOptions.currentRound[3].name
// }

function checkAnswer(){
    possibleOptions[currentRound].addEventListener("click", (e)=>{
        e.preventDefault()
        if(options[currentRound].correct = true){
            answer.innerText = `AYYY TRUE!`
            currentRound++
            points++
        }else{
            answer.innerText = `NOPE! The correct answer was ${options[currentRound].classList.contains("rightAnswer")}`
            currentRound++
        }
    })
}

// playButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     question.innerText = "The same year he won a Superbowl ring with the New York Giants, he got arrested for having a gun with no permit, found out after shooting himself in the leg at a club. Big year for..."
//     options[0].innerText = "Ray Rice"
//     options[1].innerText = "Plaxico Burress"
//     options[1].classList.add("rightAnswer");
//     options[2].innerText = "Ben Roethlesberger"
//     options[3].innerText = "Sebastian Janikowski"
// })

// for(let i = 0; i < options.length; i++){
//     options[i].addEventListener("click", (e)=>{
//         e.preventDefault();
//         if (options[i].classList.contains("rightAnswer")){
//             answer.innerText = `AYY TRUE!`
//             currentRound++
//             points++
//         }
//         else {
//             answer.innerText = `NOPE! The correct answer was `
//             currentRound++
//         }
//     })
// }
