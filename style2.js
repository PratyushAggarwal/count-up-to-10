function startcounter(){
    var target=parseInt(document.getElementById('inputId').value);
    var current=document.querySelector(".current");
    var next=document.querySelector(".next");
    var start=0;
    current.innerText=0;
    next.innerText=1;
    var countInterval=setInterval(function(){
        console.log(start);
        if(start === target){
            clearInterval(countInterval);
            alert("Counter Has Been Stopped");
            return;
        }
        next.classList.add("animate");
        start++;
        setTimeout(function(){
            current.innerText=next.innerText;
            next.classList.remove("animate");
            next.innerText=parseInt(next.innerText)+1;
        },500);
    },1000);
}