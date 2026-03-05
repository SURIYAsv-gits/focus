function generatePlan(){

let subject=document.getElementById("subject").value
let days=document.getElementById("days").value
let hours=document.getElementById("hours").value

let perDay=(hours/days).toFixed(1)

document.getElementById("plan").innerText=
"To master "+subject+" you should study "+perDay+
" hours per day for "+days+" days."
}

let time=1500
let interval

function startTimer(){

interval=setInterval(function(){

let minutes=Math.floor(time/60)
let seconds=time%60

document.getElementById("timer").innerText=
minutes+":"+(seconds<10?"0":"")+seconds

time--

if(time<0){
clearInterval(interval)
alert("Great job! Focus session completed.")
}

},1000)
}

function motivate(){

let quotes=[

"Success comes from daily discipline.",

"Small progress is still progress.",

"Focus today, succeed tomorrow.",

"Consistency beats talent.",

"Your future self will thank you."

]

let random=Math.floor(Math.random()*quotes.length)

document.getElementById("quote").innerText=quotes[random]

}

