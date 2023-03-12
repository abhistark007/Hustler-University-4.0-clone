const cursor1=document.querySelector(".cursor1");
const cursor2=document.querySelector(".cursor2");

document.addEventListener('mousemove',(event)=>{
    cursor1.style.cssText="left: "+event.clientX+"px; top: "+event.clientY+"px;";
    cursor2.style.cssText="left: "+event.clientX+"px; top: "+event.clientY+"px;"
});

const btn=document.querySelector("[bttn]");
btn.addEventListener("click",(event)=>{
    cursor1.style.cssText="transform: translate(-50%,-50%) scale(1.5); background-color: #75DAB4; opacity: 0.5; left: "+event.clientX+"px; top: "+event.clientY+"px;";
    cursor2.style.display="none";
});

const allAnchorTag=document.querySelectorAll("a");
allAnchorTag.forEach((atag)=>{
    atag.target="_blank";
});


