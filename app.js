let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let new_game=document.querySelector(".new_but");

let comp_choice=newmatch();

new_game.addEventListener("click",()=>{
    comp_choice=newmatch();
});

function newmatch(){
    let comp_choice=Math.floor(Math.random()*10);
    msg.innerText="Choose A Number";
    msg.style.backgroundColor="#7880B5";
    return comp_choice;
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user_choice=Number(choice.getAttribute("id"));
        randomgame(user_choice,comp_choice);
    })
})

function randomgame(user_choice,comp_choice){
    if(user_choice===comp_choice){
        msg.innerText="YOUR GUESS IS CORRECT!";
        msg.style.backgroundColor="green";
    }
    else{
        if(user_choice>comp_choice){
            msg.innerText="Try Lesser Number";
            msg.style.backgroundColor="red";
        }
        else{
            msg.innerText="Try Bigger Number";
            msg.style.backgroundColor="red";
        }
    }
}

