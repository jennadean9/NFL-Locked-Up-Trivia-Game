const playButton = document.querySelector(".play");
const options = document.querySelectorAll("p");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const nextButton = document.querySelector(".next");
let currentRound = 0;
let points = 0;
const questionsArray = ["The same year he won a Superbowl ring with the New York Giants, he got arrested for having a gun with no permit, found out after shooting himself in the leg at a club. Big year for..."]
const optionsArray = [
    ["Ray Rice", "Plaxico Burress", "Ben Roethlesberger", "Sebastian Janikowski"]
]
playButton.addEventListener("click", (e) => {
    e.preventDefault();
    question.innerText = questionsArray[0]
    options[0].innerText = optionsArray[0][0]
    options[1].innerText = optionsArray[0][1]
    options[1].classList.add("rightAnswer");
    options[2].innerText = optionsArray[0][2]
    options[3].innerText = optionsArray[0][3]
})
console.log(options)
for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", (e)=>{
        e.preventDefault();
        if (options[i].classList.contains("rightAnswer")){
            answer.innerText = `AYY TRUE!`
            currentRound++
            points++
        }
        else {
            answer.innerText = `NOPE! The correct answer was `
            currentRound++
        }
    })
}

function startTrivia10(e){
    for (let i = 0; i < 10; i++){
        e.preventDefault()
        questionsArray.innerText = questionsarray[i]
        options[0].innerText = optionsArray[i][0]
        options[1].innerText = optionsArray[i][1]
        options[1].innerText = optionsArray[i][2]
        options[1].innerText = optionsArray[i][3]
    }
}