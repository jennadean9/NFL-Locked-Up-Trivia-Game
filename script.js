const playButton = document.querySelector(".play");
const optionSeen = document.querySelectorAll("p");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const nextButton = document.querySelector(".next");
let currentRound = 0;
let points = 0;
let currentOptions = []; //push new correct answer into correct array, push 3 of the false ones in same array
const questionsArray = 
[
"After celebrating a little too hard the year he won a Super Bowl ring in 2008, this guy shot himself in his thigh... shot... himself... while readjusting a gun. OH, also the gun had no permit.",
"Which smooth operating Viking rented a boat Lake Minetonka for him and 17 other smooth operating teammates in 2005 with about 100 prostitutes, most of which were doin' their thang with the players in front of hired crew members.",
"After one too many bourbons and kicked out of one too many frat parties, which big 'football' guy and party fiend got charged with hitting and threating his ex-girlfriend in Dallas?",
"This receiver decided to take an illegal u-turn. Pretty mild, huh? Wait for it. Which ballsy boy decided that the best move was to actually bump the policewoman enough so that she fell over?",
"Which unortunate former RB for the Vikings got put in handcuffs at the airport for carrying dried urine and a Whizzinator? Hm? What's a Whizzinator, you ask? Why, it is a device that turns dried urine into liquid urine."
]
const possibleOptions = [
    ["Lawrence Taylor", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski",], 
    ["Fred Smoot", "Daunte Culpepper", "Jermaine Wiggins", "Troy Williamson"],
    ["Demaryius Thomas", "Terell Suggs", "Michael Bennett", "Johnny Manziel"],
    ["Odell Beckham Jr.", "Shaun Rogers", "Randy Moss", "JaMarcus Russell"],
    ["Wes Welker", "Onterrio Smith", "Cedric Benson", "Fran Tarkenton"]
]


playButton.addEventListener("click", (e) => {
    startTrivia10();
    checkAnswer();
})

function startTrivia10(){
        question.innerText = questionsArray[currentRound]
        p
}

function checkAnswer(){
    options[currentRound].addEventListener("click", (e)=>{
        e.preventDefault()
        if(options[currentRound].classList.contains("rightAnswer")){
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
