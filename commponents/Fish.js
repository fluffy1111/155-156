AFRAME.registerComponent("swimming-fish", {
    init:function (){
     for(var i=1; i<=20; i++){
         var id = `fish${i}`;
         
       var posX = (Math.random()*3000 + (-1000));
 
       var posY = (Math.random()*2 + (-1));
 
       var posZ = (Math.random()*3000 + (-1000));
       
       var position = {x:posX, y:posY, z:posZ}
 
       this.swimmingFish(id,position)
     }
    }, 
    swimmingFish: (id, position)=>{
 
     var sea = document.querySelector("#sea");
 
     var fish = document.createElement("a-entity")
     
     fish.setAttribute("id", id);
     fish.setAttribute("position", position);
     fish.setAttribute("scale", {x:500, y:500, z:500})
     fish.setAttribute("gltf-model", "C:/Users/maxwe/Downloads/pro153/assets/fish/fish.glb")
     
     fish.setAttribute("animation-mixer",{})
 
     sea.appendChild(fish);
 
    }
 })