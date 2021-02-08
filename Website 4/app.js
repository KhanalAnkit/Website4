
function b1(){
    document.querySelector(".area").value=1;
}
function b2(){
    document.querySelector(".area").value=2;
}
function b3(){
    document.querySelector(".area").value=3;
}
function b4(){
    document.querySelector(".area").value=4;
}
function b5(){
    document.querySelector(".area").value=5;
}
function b6(){
    document.querySelector(".area").value=6;
}
function b7(){
    document.querySelector(".area").value=7;
}
function b8(){
    document.querySelector(".area").value=8;
}
function b9(){
    document.querySelector(".area").value=9;
}
function b0(){
    document.querySelector(".area").value=0;
}


 function guess(){
    let userNumber=document.querySelector(".area").value;
    let secretNumber=Math.floor(Math.random()*10);
        if(userNumber==secretNumber){
            document.querySelector(".h1-reveal").innerHTML="Yayy!! Congratulations:)";
        }
        else{
            document.querySelector(".h1-reveal").innerHTML="Sorry!! Try again:(";
            
        }
    }
 