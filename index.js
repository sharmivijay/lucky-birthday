var birthDate =  document.querySelector("#input-date");
var luckyNumber = document.querySelector("#input-num");
var btnCheck = document.querySelector("#btn-check");
var message = document.querySelector(".message");

btnCheck.addEventListener("click", validateDate);

function validateDate(){
    hidemessage();
    if(!birthDate.value){
        showMessage("select birth date 😅");
    }
    else{
        if(birthDate.value){
            if(!luckyNumber.value){
                showMessage("Give me your favorite number 😇"); 
            }
            else{
                var total= calculateSum(birthDate.value);
                if(total % luckyNumber.value ===0 ){
                    showMessage("Your favorite Number is actually your lucky one🤩" );  
                }else{
                    showMessage("Your favourite is someone else's lucky number😉");
                }
            }
        }
    }
}

function hidemessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}

function calculateSum(tempDate){
    var date =  tempDate.replaceAll("-", "");
    var sum = 0;
    for(var i= 0; i< date.length;i++){
        sum = sum + Number( date.charAt(i));
    }
    return sum;
}

