console.log("Welcome to Tic Tac Toe");
let music=new Audio("Ting Sound Effect.mp3");
let turn =new Audio("Ting Sound Effect.mp3");
let gameover=new Audio("Ting Sound Effect.mp3");
let turn1 ="X"
let isgameover = false;
//Function to change the turn
const changeTurn = ()=>{

    return turn1 ==="X" ? "0" : "X";
}
//Function to check for a win 
const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
            [0,1,2,-14,5,0],
            [3,4,5,-14,15,0],
            [6,7,8,-14,25,0],
            [0,3,6,-26,15,90],
            [1,4,7,-16,15,90],
            [2,5,8,-6,15,90],
            [0,4,8,-15,15,45],
            [2,4,6,-12,11,-45],
        ]
        wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)  && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.width = "25vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;        
        }   
        })
}
//game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn1;
            turn1=changeTurn();
            turn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For "+turn1;
            }
            //document.getElementsByClassName("info")[0].innerText = "Turn for "+turn1;

        }
    })
})

//add onclick listener to  reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
        });
        turn1 = "X";
        isgameover = false
            document.querySelector(".line").style.width = "0vw";
            document.getElementsByClassName("info")[0].innerText = "Turn For "+turn1;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})
