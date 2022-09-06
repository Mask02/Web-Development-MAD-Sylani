function alr(){
    alert("Read me")
}
function nana(){
    var a=document.getElementById("text") .value;
    document.getElementById("print").innerHTML=a;
}

function tabl(){
    
    document.getElementsByTagName("text").innerText=" ";
    var b =document.getElementById("text") .value;
    for(var i=1;i<=10;i++){
        result=i*b;
        
        document.getElementById("print").innerHTML+="<h5>"+b +" X " + i +" = "+result +"<\h5>";
    }
    
    
}
function print1(){
    var usman=["<h5>"+"Faisalabad"+"</h5>"+"<h5>"+"Lahore"+"</h5>"+"<h5>"+"Karachi"+"</h5>"+ "<h5>"+"Multan"+"</h5>"+ "<h5>"+"Borawla"+"</h5>"+ "<h5>"+"Sargodha"+"</h5>"+ "<h5>"+"Islamabad"+"</h5>"+"<h5>"+"Peshawar"+"</h5>"]
    for (let i = 0; i < usman.length; i++) {
        const she  = usman[i] +"<br>"; 
        document.getElementById("print").innerHTML = she;
    }
    
}
function add(){
    
    var usman=["<h5>"+"Faisalabad"+"</h5>"+"<h5>"+"Lahore"+"</h5>"+"<h5>"+"Karachi"+"</h5>"+ "<h5>"+"Multan"+"</h5>"+ "<h5>"+"Borawla"+"</h5>"+ "<h5>"+"Sargodha"+"</h5>"+ "<h5>"+"Islamabad"+"</h5>"+"<h5>"+"Peshawar"+"</h5>"]
    var b =document.getElementById("text") .value;
    usman.unshift("<h5>"+ b +"<\h5>");
    for (let i = 0; i < usman.length; i++) {
        const she  = usman[i] +"<br>"; 
        document.getElementById("print").innerHTML ="<h5>"+b+"</h5>"+ she;
    }
}
function clear1(){
    document.getElementsByTagName("input")[0].innerHTML=" ";
    
    
}
function clear11(){ 
    document.getElementById("print").innerHTML=" ";
}