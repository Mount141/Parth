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

/* ---------- Sibling Lie Detector ---------- */
const ldOrder=["q1","q2","q3"];
let ldIndex=0;
let ldLies=0;

function ldPick(btn,qid,isLie,reaction){
  const card=document.getElementById("ld-"+qid);
  card.querySelectorAll("button").forEach(b=>b.classList.remove("picked-lie","picked-truth"));
  btn.classList.add(isLie ? "picked-lie" : "picked-truth");
  document.getElementById("ld-r"+qid.slice(1)).textContent=reaction;
  if(isLie) ldLies++;
  document.getElementById("ldNextBtn").classList.remove("ld-hidden");
}

function ldNext(){
  ldIndex++;
  document.getElementById("ldNextBtn").classList.add("ld-hidden");

  if(ldIndex>=ldOrder.length){
    const verdicts=[
      "🟢 0 lies?! Either the most honest sibling alive, or the detector is broken.",
      "🟠 1 lie caught. A little sus, but we'll let it slide.",
      "🔴 2 lies caught. Certified fibber. Iconic behaviour honestly.",
      "🚨 3 lies caught! PERFECT SCORE. You should be embarrassed. We love you anyway."
    ];
    document.getElementById("ldScore").textContent = verdicts[ldLies];
    document.getElementById("ldSub").textContent = "Results are in. No appeals accepted.";
    setTimeout(()=>showScreen("things"), 1800);
    return;
  }

  document.getElementById("ldSub").textContent = ldIndex===ldOrder.length-1
    ? "Last question — make it count."
    : `Question ${ldIndex+1} of ${ldOrder.length}`;

  ldOrder.forEach((q,i)=>{
    document.getElementById("ld-"+q).classList.toggle("ld-hidden", i!==ldIndex);
  });
}
