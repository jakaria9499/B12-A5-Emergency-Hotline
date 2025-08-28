// heart increment number function 
function heartIncrement() {
    let currentDigit = parseInt(document.getElementById("heart_display").innerText);
    document.getElementById("heart_display").innerText = ++currentDigit;
}

// calling alert
let coin = 100;
document.getElementById("coin").innerText = coin;
let callBtnCollection = document.getElementsByClassName("call_btn");
for(let i of callBtnCollection) {
    i.addEventListener("click", function() {
        if(coin>0) {
            alert("calling " + i.parentElement.parentElement.childNodes[3].childNodes[1].innerText +" " + i.parentElement.parentElement.childNodes[5].childNodes[1].innerText );
            coin-=20;
            document.getElementById("coin").innerText = coin;
        }
        else{
            alert("insufficient coins , you need to at least 20 coins to make a call");
        }
    })
}

// copy functionality
let copyBtnCollection = document.getElementsByClassName("copy_btn");

for(let i of copyBtnCollection) {
    i.addEventListener("click", function() {
        const copyText = i.parentElement.parentElement.childNodes[5].childNodes[1].textContent;
        navigator.clipboard.writeText(copyText);
    })
}
