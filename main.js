let Bill = document.getElementById("Bill");
let People = document.getElementById("People");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twentyfive = document.getElementById("twentyfive");
let fifty = document.getElementById("fifty");
let tipamount = document.getElementById("tipamount");
let totalamount = document.getElementById("totalamount");
let reset = document.getElementById("reset");
let custom = document.getElementById("custom");
let error = document.getElementById("error");
let a= 0;
let b=0;
let c=0;
let tip=0;
let total=0;
Bill.addEventListener("input",function() {
   a = Bill.value;
   console.log(a); 
});

five.addEventListener("click",function(){
     c = (5/100)*a;
    console.log(c);
});

ten.addEventListener("click",function(){
     c = (10/100)*a;
    console.log(c);
});

fifteen.addEventListener("click",function(){
     c = (15/100)*a;
    console.log(c);
});

twentyfive.addEventListener("click",function(){
     c = (25/100)*a;
    console.log(c);
});

fifty.addEventListener("click",function(){
     c = (50/100)*a;
    console.log(c);
});

custom.addEventListener("input",function(){
    c = (custom.value/100)*a;
   console.log(c);
});

People.addEventListener("input",function(){
    b= People.value;
    
    if (b==0){
        People.style.outlineColor="red";
        error.style.display="inline";
    }
    else{
        People.style.outlineColor="hsl(172, 67%, 45%)";
        error.style.display="none";
        tip=c/b;
        total= a/b;
        console.log(tip);
        console.log(total);
        // tip.toFixed(2);
        // total.toFixed(2);
        tipamount.textContent="$"+tip.toFixed(2);
        totalamount.textContent="$"+total.toFixed(2);
    }
});

reset.addEventListener("click",function(){
    tipamount.textContent="$0";
    totalamount.textContent="$0";
    Bill.value=null;
    People.value=null;
    custom.value=null;
    console.log("reset");
    People.style.outlineColor="hsl(172, 67%, 45%)";
    error.style.display="none";
});


