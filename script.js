console.log("Linked");
let audio= new Audio('audio.mp3');
/GETTING THE DIV WHICH CONTAINS TIME/ 
let timecontainer=document.getElementById("time-keeper");
/INITIALIZING VARIABLES/ 
let isTimerRunning=false;
let hour=00;
let sec=00;
let min=00;

/HANDLING CLICKS ON THE WHOLE DOCUMENT BY EVENT DELEGATION/ 
function handleclick(event) {
    console.log(event.target.id);
    if(event.target.id=='start' && !isTimerRunning){
        isTimerRunning=true;
        startTimer();}

   if(event.target.id=='stop' && isTimerRunning){
        stopTimer();} 

    if(event.target.id=='reset'){
        resetTimer();}
}

/FUNCTION TO START TIMER/ 
function startTimer(){
    timecontainer.style.color='rgb(136, 10, 10)';
    if(isTimerRunning==true){
    sec++;
    if(sec==60){
        sec=0;
        min++;}
    if(min==60){
        min=0;
        hour++;}
        
   timecontainer.innerHTML=(hour<10?'0':"")+hour+":"+(min<10?'0':"")+min+":"+(sec<10?'0':"")+sec;
   document.querySelector('title').innerHTML=(hour<10?'0':"")+hour+":"+(min<10?'0':"")+min+":"+(sec<10?'0':"")+sec;
   setTimeout(startTimer,1000);}
}

/FUNCTION TO STOP THE TIMER/ 
function stopTimer() {
    timecontainer.style.color='white';
    isTimerRunning=false;}


/FUNCTION TO RESET THE TIMER AND RESET THE VARIABLES/ 
function resetTimer(){
    timecontainer.style.color='white';
    isTimerRunning=false;
    sec=0;
    min=0;
    hour=0;
    /TO SHOW DOUBLE DIGITS WHEN HOUR SEC OR MIN ARE LESS THAN 10/

    timecontainer.innerHTML=(hour<10?'0':"")+hour+":"+(min<10?'0':"")+min+":"+(sec<10?'0':"")+sec;
    document.querySelector('title').innerHTML=(hour<10?'0':"")+hour+":"+(min<10?'0':"")+min+":"+(sec<10?'0':"")+sec;
}





document.addEventListener("click",handleclick);
