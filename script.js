const screens=[...document.querySelectorAll(".screen")];
function showScreen(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"});}
function confetti(){
  const emojis=["🎉","❤️","✨","🎀","🌸","⭐","😂"];
  for(let i=0;i<55;i++){
    const e=document.createElement("span");
    e.className="confetti-piece";
    e.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    e.style.left=Math.random()*100+"vw";
    e.style.animationDelay=Math.random()*0.7+"s";
    e.style.fontSize=(14+Math.random()*18)+"px";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),3800);
  }
}
function roast(){
  document.getElementById("result").innerHTML="🚨 BREAKING NEWS 🚨<br>Your sister has been officially diagnosed with <b>\"I am always right\" syndrome.</b> 😂";
}
function sweet(){
  document.getElementById("result").innerHTML="❤️ Whatever happens, you will always have a brother who annoys you, supports you, protects you... and probably steals your snacks. 🫶";
}
function finalMessage(){
  document.getElementById("result").innerHTML="🎊 OKAY OKAY! Enough emotions. Now go annoy your brother again! 😎❤️";
}
setTimeout(()=>{ if(document.getElementById("home").classList.contains("active")) confetti(); },800);
