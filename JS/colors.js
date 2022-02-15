const paleta = document.querySelector("#cores-container");

let arrColors = [ 
    "#FFD600","#E64A1D", "#ff0000", "#f249b7",
    
    "#2889F7","#300495","#bd1fbf","#DF70CF",

    "#428993", "#369e71", "#57b507", "#80FF15",
    
    "#757563", "#BCC0C4", "#E8E4E8", "#AA7E20"]

 for(let index = 0; index < arrColors.length; index+= 1){
     let cores = document.createElement("div");
     cores.classList.add("cores")
     cores.setAttribute("id", `${arrColors[index]}`)
     cores.style.backgroundColor = arrColors[index];
     paleta.appendChild(cores);
}

const escolherCor = document.querySelector("#chama-cores");
escolherCor.addEventListener("click", abrirPaleta)
function abrirPaleta (){
    paleta.classList.toggle("abrirfechar");
}