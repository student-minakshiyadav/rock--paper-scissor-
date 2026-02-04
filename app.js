let divs=document.querySelectorAll(".images");
let userCount=document.querySelector("#user-count")
let compCount=document.querySelector("#comp-count")
let result=document.querySelector("#result")

divs.forEach((div)=>{
    div.addEventListener("click",()=>{
        let userInput=div.getAttribute("id")
       console.log("user ="+userInput);
        let compInput=getComputerInput();
        console.log("comp ="+compInput);
        let winner=getWinner(userInput,compInput)
        console.log(winner);
        if(winner=="computer win !"){
            compCount.innerText=Number(compCount.innerText)+1;
            result.innerText=`computer win ! ${compInput} beats ${userInput}`
            result.style.backgroundColor="red";
        }
        else if(winner=="you win !"){
            userCount.innerText=Number(userCount.innerText)+1;
            result.innerText=`you win ! ${userInput} beats ${compInput}`;
            result.style.backgroundColor="green";
        }
        else{
            result.innerText=winner;
            result.style.backgroundColor="blue";
        }
    })
})

function getComputerInput(){
    let arr=["rock","paper","scissor"];
    let index=parseInt(Math.random()*3);
    return arr[index];
}

function getWinner(userInput,compInput){
    if(userInput==compInput){
        return "match is draw";
    }
    else if(userInput=="rock"){
        if(compInput=="paper"){
            return "computer win !"
        }
        else{
            return "you win !"
        }
    }
    else if(userInput=="paper"){
        if(compInput=="scissor"){
            return "computer win !"
        }
        else{
            return "you win !"
        }
    }
    else{
        if(compInput=="rock"){
            return "computer win !"
        }
        else{
            return "you win !"
        }
    }
}