var daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
var body = document.querySelector("body");


function showClock(){

var currentDate = new Date();
var customizedDate = currentDate.getHours() +" : "+ currentDate.getMinutes() + " : "+ currentDate.getSeconds() + "   " + daysOfWeek[currentDate.getDay()];
let allHeaders = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let lastHeader = allHeaders[allHeaders.length - 1];
lastHeader.textContent = customizedDate;

}



function start(){
    
    let fullName = prompt("Input your name: ");
    

    if (!fullName) {
        addHeader("You should enter your name",1);
        return;
    }
 

    addHeader("Your Clock",1);
    addHeader("Wellcome "+fullName,1);
    addHeader("Clock",2);
    showClock();
    setInterval(showClock,1000);
 
}


function addHeader(header,headLevel){

    let h = document.createElement("h"+headLevel);
    h.innerHTML = header;
    body.appendChild(h);
}