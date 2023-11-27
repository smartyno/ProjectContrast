let counter = 0; 

function showHideStory() {
    var x = document.getElementById("storyOverlay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function showHideAbout() {
    var x = document.getElementById("aboutOverlay");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function bodyClick() {
        counter ++ ;
        console.log(counter)
        if(counter === 1){ 
            document.getElementById("intro").style.visibility = "hidden";
            document.getElementById("visits").style.visibility = "visible";
            document.getElementById("lifetime").style.visibility = "visible";
            document.getElementById("group30l").style.visibility = "visible";
            document.getElementById("group30r").style.visibility = "visible";
            document.getElementById("group29l").style.visibility = "visible";
            document.getElementById("group29r").style.visibility = "visible";
            document.getElementById("group28l").style.visibility = "visible";
            document.getElementById("group28r").style.visibility = "visible";
            document.getElementById("units-container").style.visibility = "visible";
            document.getElementById("directions-container").style.visibility = "visible";
            document.getElementById("scale-container").style.visibility = "visible";
            document.getElementById("arrow-container").style.visibility = "visible";

            window.scrollTo(0, 0);
            
           }else if(counter === 2){
            document.getElementById("visits").style.visibility = "hidden";
            document.getElementById("lifetime").style.visibility = "hidden";
            document.getElementById("hive").style.visibility = "visible";
            document.getElementById("apt").style.visibility = "visible";
            document.getElementById("group29l").style.visibility = "hidden";
            document.getElementById("group29r").style.visibility = "hidden";
            document.getElementById("group28l").style.visibility = "hidden";
            document.getElementById("group28r").style.visibility = "hidden";
            document.getElementById("group27l").style.visibility = "visible";
            document.getElementById("group27r").style.visibility = "visible";
            document.getElementById("group26l").style.visibility = "visible";
            document.getElementById("group26r").style.visibility = "visible";                     
            }else if(counter === 3){
            document.getElementById("densthl").style.visibility = "visible";
            document.getElementById("denstjg").style.visibility = "visible";
            document.getElementById("apt").style.visibility = "hidden";
            document.getElementById("hive").style.visibility = "hidden";
            document.getElementById("group27l").style.visibility = "hidden";
            document.getElementById("group27r").style.visibility = "hidden";
            document.getElementById("group26l").style.visibility = "hidden";
            document.getElementById("group26r").style.visibility = "hidden";
            document.getElementById("group24l").style.visibility = "visible";
            document.getElementById("group24r").style.visibility = "visible";
            document.getElementById("group23l").style.visibility = "visible";
            document.getElementById("group23r").style.visibility = "visible";
                
            }else if(counter === 4){
            document.getElementById("complaints").style.visibility = "visible";
            document.getElementById("trains").style.visibility = "visible";
            document.getElementById("densthl").style.visibility = "hidden";
            document.getElementById("denstjg").style.visibility = "hidden";
            document.getElementById("group24l").style.visibility = "hidden";
            document.getElementById("group24r").style.visibility = "hidden";
            document.getElementById("group23l").style.visibility = "hidden";
            document.getElementById("group23r").style.visibility = "hidden";
            document.getElementById("group21l").style.visibility = "visible";
            document.getElementById("group21r").style.visibility = "visible";
            document.getElementById("group20l").style.visibility = "visible";
            document.getElementById("group20r").style.visibility = "visible";
           
            }else if(counter === 5){
            document.getElementById("flower").style.visibility = "visible";
            document.getElementById("eggplants").style.visibility = "visible";
            document.getElementById("complaints").style.visibility = "hidden";
            document.getElementById("trains").style.visibility = "hidden";
            document.getElementById("group21l").style.visibility = "hidden";
            document.getElementById("group21r").style.visibility = "hidden";
            document.getElementById("group20l").style.visibility = "hidden";
            document.getElementById("group20r").style.visibility = "hidden";
            document.getElementById("group18l").style.visibility = "visible";
            document.getElementById("group18r").style.visibility = "visible";
            document.getElementById("group17l").style.visibility = "visible";
            document.getElementById("group17r").style.visibility = "visible";
            document.getElementById("group14l").style.visibility = "hidden";
            document.getElementById("group14r").style.visibility = "hidden";
                   
            }else if(counter === 6){
            document.getElementById("party").style.visibility = "visible";
            document.getElementById("work").style.visibility = "visible";
            document.getElementById("flower").style.visibility = "hidden";
            document.getElementById("eggplants").style.visibility = "hidden";
            document.getElementById("group18l").style.visibility = "hidden";
            document.getElementById("group18r").style.visibility = "hidden";
            document.getElementById("group17l").style.visibility = "hidden";
            document.getElementById("group17r").style.visibility = "hidden";
            document.getElementById("group16l").style.visibility = "visible";
            document.getElementById("group16r").style.visibility = "visible";
            document.getElementById("group15l").style.visibility = "visible";
            document.getElementById("group15r").style.visibility = "visible";
         
                
            }else if(counter === 7){
            document.getElementById("coffee").style.visibility = "visible";
            document.getElementById("plate").style.visibility = "visible";
            document.getElementById("party").style.visibility = "hidden";
            document.getElementById("work").style.visibility = "hidden";
            document.getElementById("group16l").style.visibility = "hidden";
            document.getElementById("group16r").style.visibility = "hidden";
            document.getElementById("group15l").style.visibility = "hidden";
            document.getElementById("group15r").style.visibility = "hidden";
            document.getElementById("group14l").style.visibility = "visible";
            document.getElementById("group14r").style.visibility = "visible";
            document.getElementById("group13l").style.visibility = "visible";
            document.getElementById("group13r").style.visibility = "visible";
    
          } else if(counter === 8){
            window.location.reload()
          }
}