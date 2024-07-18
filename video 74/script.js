let btn =  document.getElementById("btn")

btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>yea click is initiated</b> enjoy your click"
    alert("btn is clicked")
})

btn.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="<b>yea click is initiated</b> enjoy your click"
    alert("don't click right btn")
})