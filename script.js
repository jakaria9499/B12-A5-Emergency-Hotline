// heart increment number function 
function heartIncrement() {
    let currentDigit = parseInt(document.getElementById("heart_display").innerText);
    document.getElementById("heart_display").innerText = ++currentDigit;
}


function date() {
    const d = new Date();
    let ex ;
    let h = d.getHours();
    if(12<h){
        h-=12;
    }
    if(h<12){
        ex="AM";
    }else{
        ex="PM";
    }
    let final = h+":"+d.getMinutes()+":"+d.getSeconds()+" "+ex;
    return final;
}
let historyList = [];
function removeAllC() {
    let list = document.getElementById("history_list");
    while(list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    };
}
function callHistory() {
    for(let i=0;i<historyList.length; i++) {
        let list = document.createElement("div");
        list.innerHTML  = `
                <div class="history_item flex justify-between  items-center mb-4 bg-gray-100 rounded-md p-3 max-2xl:text-sm max-sm:text-xs">
                    <div class="">
                        <h3 class="font-bold">`+historyList[i].name+`</h3>
                        <p class="text-gray-500">`+historyList[i].number+`</p>
                    </div>
                    <div class="time">
                        <p class="text-gray-500">`+historyList[i].time+`</p>
                    </div>
                </div>`;
        document.getElementById("history_list").appendChild(list);
    }
}


// calling alert and call history
let coin = 100;
document.getElementById("coin").innerText = coin;
let callBtnCollection = document.getElementsByClassName("call_btn");
for(let i of callBtnCollection) {
    i.addEventListener("click", function() {
        if(coin>0) {
            let serviceName = i.parentElement.parentElement.childNodes[3].childNodes[1].innerText;
            let serviceNumber = i.parentElement.parentElement.childNodes[5].childNodes[1].innerText;
            alert("calling " + serviceName +" " + serviceNumber );
            coin-=20;
            document.getElementById("coin").innerText = coin;
            historyList.push({name: serviceName, number: serviceNumber, time: date()});
            removeAllC();
            callHistory();
            
        }
        else{
            alert("insufficient coins , you need to at least 20 coins to make a call");
        }
    })
}

// copy functionality
let copyBtnCollection = document.getElementsByClassName("copy_btn");
let copyCount = 0;
for(let i of copyBtnCollection) {
    i.addEventListener("click", function() {
        const copyText = i.parentElement.parentElement.childNodes[5].childNodes[1].textContent;
        navigator.clipboard.writeText(copyText);
        copyCount++
        document.getElementById("copy_display").innerText = copyCount;
        alert("Number copied "+ i.parentElement.parentElement.childNodes[5].childNodes[1].innerText)
    })
}

// clear funciton 

document.getElementById("clear_btn").addEventListener("click", function() {
    historyList = [];
    removeAllC();
});
