function Askn(){
    var a=prompt("Enter Your First Name")
    var b=prompt("Enter Your Second Name")
    document.getElementById("statement").innerHTML=a+b;
    document.getElementById("output").innerHTML="Hello\n"+a+b;
}
function askname(){
    var a=prompt("Enter your name Sir");
    document.getElementById("statement").innerHTML="How are you sir "+ a;
    document.getElementById("output").innerHTML="How may I help you \n"+a;
    
}
function comp(){
    var a=prompt("Enter the First Number for Comaprison");
    var b=prompt("Enter the Second Number for Comaprison");
    if(a==b){
        document.getElementById("statement").innerHTML="Both Numbers "+ a +" "+b +" are Equal";
        
    } 
    else if(a<b){
        document.getElementById("statement").innerHTML=b+ " Is Greater Then "+a;
        document.getElementById("output").innerHTML=a+ " Is Smaller Then "+b;
        
    }
    else{
        document.getElementById("statement").innerHTML=a+ " Is Greater Then "+b;
        document.getElementById("output").innerHTML=b+ " Is Smaller Then "+a;
        
    }
}
function marks(){
    var a=prompt("Enter your Marks out of 100 to find Grade");
    if(a>=85){
        document.getElementById("statement").innerHTML="You Got '\A\' Grade";
        document.getElementById("output").innerHTML="<h4>"+"Appricate You Keep it up Man"+"<\h4>";
        
    }
    else if(a>=60){
        document.getElementById("statement").innerHTML="You Got '\B\' Grade";
        document.getElementById("output").innerHTML="<h4>"+"Work Hard To improve yourSelf"+"<\h4>";
        
    }
    else if(a>=50){
        document.getElementById("statement").innerHTML="You Got '\C\' Grade";
        document.getElementById("output").innerHTML="<h4>"+"Make some Improvement"+"<\h4>";
        
    }
    else if(a>=10){
        document.getElementById("statement").innerHTML="You Got '\F\' Grade";
        document.getElementById("output").innerHTML="<h4>"+"Bad Result"+"<\h4>";

    }
    else{
        document.getElementById("statement").innerHTML="You Got '\F\' Grade";
        document.getElementById("output").innerHTML="<h4>"+"Beta Tera kxh nai ho sakta"+"<\h4>";
        
    }
}
function weight(){
    var a=prompt("Enter Your Age");
    var b=prompt("Enter You Weight");
    if(a<=10 || b<=40){
        document.getElementById("statement").innerHTML="You are A cute Child and Fit";
        document.getElementById("output").innerHTML="<h4>"+"Good Health"+"<\h4>";
        
    }
    else if(a<=20 || b<=100){
        document.getElementById("statement").innerHTML="You are a SMIT Student and fit";
        document.getElementById("output").innerHTML="<h4>"+"Keep Struggling"+"<\h4>";
        
    }
    else if(a<=25 || b<=150){
        document.getElementById("statement").innerHTML="You are a SMIT Student and FAT";
        document.getElementById("output").innerHTML="<h4>"+"Exercise Please"+"<\h4>";
        
    }
    else if(a<=40 ||b<=200 ){
        document.getElementById("output").innerHTML="<h4>"+"Your are at your peak of age"+"<\h4>";
        document.getElementById("statement").innerHTML="Do your Best";
        
    }
    else {
        document.getElementById("statement").innerHTML="You are Average  ";
        document.getElementById("output").innerHTML="<h4>"+"Do your best"+"<\h4>";
        
    }
}
var login= ()=>{
    var pas=12345678;
    var c=alert("Password= "+3310)
    var a=prompt("Enter your Name")
    var b=+prompt("Enter your Password")
    if(b==pas){
        alert("Now you can Access All Controls")
        document.getElementById("statement").innerHTML="<h4>"+"Now you can Access All Controls"+"<\h4>";
    }
    else{
        document.getElementById("statement").innerHTML="<h4>"+"Wrong Password"+"<\h4>";
        alert("Wrong Password")
        
    }
}
function clear1(){
    document.getElementById("statement").innerHTML=" ";
    
    
}
function clear11(){ 
    document.getElementById("output").innerHTML=" ";
}