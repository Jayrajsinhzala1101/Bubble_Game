var timer = 60;
var score = 0;
var hitrn = 0;
function scoreChange(){
    score += 10;
    document.querySelector(".score").textContent = score;
}
function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hitrn;
}

function createBubble(){
    let clutter = "";
    for(let i=1;i<=126;i++){
        var rn1 = Math.floor(Math.random()*10);
        clutter += `<div class = bubble>${rn1}</div>`
    }
    document.querySelector(".pgbtm").innerHTML = clutter
}
function runTimer(){
    let timerset= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else{
            clearInterval(timerset);
            var clutter1=""
            clutter1+=`<h1>The ans is ${score}</h1>`
            document.querySelector(".pgbtm").innerHTML = clutter1;
        }
    },1000)
}

document.querySelector(".pgbtm").addEventListener("click",function(dets){
    var bn = Number(dets.target.textContent);
    if(hitrn === bn){
        scoreChange();
        createBubble();
        hit()
    }
})

runTimer()
createBubble();
hit()

