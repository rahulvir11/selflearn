
console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";
let isgameover = false;


//function to check for the turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}
//function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 5.5, 0,30],
        [3, 4, 5, 0, 15, 0,30],
        [6, 7, 8, 0, 25.5, 0,30],
        [0, 3, 6, -10, 15, 90,30],
        [1, 4, 7, 0, 15, 90,30],
        [2, 5, 8, 10, 15, 90,30],
        [0, 4, 8, -5.5, 15, 45,41],
        [2, 4, 6, -5.5, 15, -45,41],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is Winner";
            isgameover = true;
            document.querySelector('.imgbox').classList.add("imgbox1");
            document.querySelector("#line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector("#line").style.width = `${e[6]}vw`;
        }
    })
}
//Game logic 
let boxes = document.querySelectorAll(".box");

boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.querySelector('.boxtext').innerText === '') {
            e.querySelector('.boxtext').innerText = turn;
            audioTurn.play();
            turn = changeTurn();
            checkwin();
            if (!isgameover) {
                document.querySelector('.info').innerText = "terun for " + turn;
            }
        }
    })
})


function reset() {
    let b = document.querySelectorAll(".boxtext");
    b.forEach((e) => {
        e.innerText = "";
    })
   isgameover = false;
   document.querySelector('.imgbox').classList.remove("imgbox1"); 
   document.querySelector("#line").style.width = "0vw";
   document.querySelector('.info').innerText = "turn for "+turn;
}

start.addEventListener("click",()=>{
    gsap.to("#pagetwo",{
        scale : 0.0,
        rotate:360,
        duration:"2s",
        transition: "1s",
    })
})