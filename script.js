const playButton = document.querySelector(".play");
const optionSeen = document.querySelectorAll("p");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const nextButton = document.querySelector(".next");
let currentRound = 0;
let points = 0;
const questionsArray = 
[
"The same year he won a Superbowl ring with the New York Giants, he got arrested for having a gun with no permit, found out after shooting himself in the leg at a club. Big year for...",
"This 49er has quite the history with the po-po, but he is most notably known for being arrested after allegedly assaulting his 70 year old father. Who may this incredibly moral driven man be?"
]
const optionsArray = ["Ray Rice", "Ben Roethlesberger", "Sebastian Janikowski",  "Jerry Rice", "Joe Montana", "Aldon Smith"]

const correctAnswers = {
    names: ["Plaxico Burress", "Bruce Miller"],
    correct: true
}

playButton.addEventListener("click", (e) => {
    startTrivia10();
    checkAnswer();
})

console.log(questionsArray)
console.log(questionsArray[0])
console.log(optionSeen)
console.log(optionsArray)

function startTrivia10(){
        question.innerText = questionsArray[currentRound]
        optionSeen[0].innerText = optionsArray[currentRound][0]
        optionSeen[1].innerText = optionsArray[currentRound][1]
        optionSeen[2].innerText = optionsArray[currentRound][2]
        optionSeen[3].innerText = optionsArray[currentRound][3]
}
optionsArray[0][1].classList.add("rightAnswer")
optionsArray[1][0].classList.add("rightAnswer")

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
        // e.preventDefault();
        // if (options[i].classList.contains("rightAnswer")){
        //     answer.innerText = `AYY TRUE!`
        //     currentRound++
        //     points++
        // }
//         else {
//             answer.innerText = `NOPE! The correct answer was `
//             currentRound++
//         }
//     })
//}

//trying it with classes
// class Question{
//     constructor(question, answer){
//         this.question = question
//         this.answer = answer
//     }
// }