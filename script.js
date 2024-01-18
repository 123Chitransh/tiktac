console.log("Welcome to the ticTacTo game ! ");
let turn = "X"
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
let audio1 =  new Audio("audio.mp3");

let isgameover = false;
const checkWin = () => {
    let boxText = document.getElementsByClassName("box");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
            isgameover = true;
            gsap.to(".imgbox",{
                scale:1,
            })
            audio1.play();
            // document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}





let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "") {
            element.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})


reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll('.box');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    gsap.to(".imgbox",{
        scale:0,
    })
    audio1.pause();
    // document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = " 0px"
})