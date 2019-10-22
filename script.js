const playButton = document.querySelector(".play");
const options = document.querySelectorAll("p");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const nextButton = document.querySelector(".next");
let currentRound = 0;
let points = 0;

playButton.addEventListener("click", (e) => {
    e.preventDefault();
    question.innerText = "The same year he won a Superbowl ring with the New York Giants, he got arrested for having a gun with no permit, found out after shooting himself in the leg at a club. Big year for..."
    options[0].innerText = "Ray Rice"
    options[1].innerText = "Plaxico Burress"
    options[1].classList.add("rightAnswer");
    options[2].innerText = "Ben Roethlesberger"
    options[3].innerText = "Sebastian Janikowski"
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

