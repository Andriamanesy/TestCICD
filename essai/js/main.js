let subMenu = document.getElementById("subMenu");
    function toggleMenu(){
        subMenu.classList.toggle("open-menu");
    }
 


    let ToggAct = document.getElementById("ToggAct");
    let ToggDmd = document.getElementById("ToggDmd");
    let ToggQuest = document.getElementById("ToggQuest");
    let ToggDol = document.getElementById("ToggDol");
    
    let act = document.getElementById("act");
    let dmdC = document.getElementById("dmdC");
    let doleance = document.getElementById("doleance");
    let quest = document.getElementById("quest");


     ToggAct.addEventListener("click", () => {   
         act.style.display = "block";
         dmdC.style.display = "none";
         quest.style.display = "none";
         doleance.style.display = "none";
      
     })
     ToggDmd.addEventListener("click", () => {
       if(getComputedStyle(dmdC).display === "none"){
         dmdC.style.display = "block";
         act.style.display = "none";
         quest.style.display = "none";
         doleance.style.display = "none";
       } else {
         dmdC.style.display = "block";
       }
     })
     ToggQuest.addEventListener("click", () => {
       if(getComputedStyle(quest).display === "none"){
         quest.style.display = "block";
         act.style.display = "none";
         dmdC.style.display = "none";
         doleance.style.display = "none";
       } else {
         quest.style.display = "block";
       }
     })
     ToggDol.addEventListener("click", () => {
       if(getComputedStyle(doleance).display === "none"){
         doleance.style.display = "block";
         act.style.display = "none";
         dmdC.style.display = "none";
         quest.style.display = "none";
       } else {
         doleance.style.display = "block";
       }
     })