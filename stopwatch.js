var hr=min=sec=0;
var count=timer=0;
document.getElementById("stop").style.display="none";
function start(){
timer=true;
stopwatch();
document.getElementById("start").style.display="none";
document.getElementById("stop").style.display="inline";
}
function stop(){
timer=false;
stopwatch();
document.getElementById("stop").style.display="none";
document.getElementById("start").style.display="inline";
}
function restart(){
    count=0;
    min=0;
    sec=0;
    hr=0;
    timer=false;
    document.getElementById("stop").style.display="none";
document.getElementById("start").style.display="inline";
    stopwatch();
}
function stopwatch(){
    var countString=count,secString=sec,minString=min,hrString=hr;

    if(count<10)
    countString="0"+count;
    if(sec<10)
    secString="0"+sec;
    if(min<10)
    minString="0"+min;
    if(hr<10)
    hrString="0"+hr;

if(timer){
    count+=1;
    if(count==100)
    {
        count=0;
        sec+=1;
    }
    if(sec==60){
        count=0;
        sec=0;
        min+=1;
    }
    if(min==60){
        count=0;
        sec=0;
        min=0;
        hr+=1;
    }
    
   
    document.getElementById("count").innerHTML=countString;
    document.getElementById("sec").innerHTML=secString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("hr").innerHTML=hrString;
    setTimeout("stopwatch()",10);
}
else{
    document.getElementById("count").innerHTML=countString;
    document.getElementById("sec").innerHTML=secString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("hr").innerHTML=hrString;
}
}