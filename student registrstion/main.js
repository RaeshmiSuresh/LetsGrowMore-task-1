function func(){
    if((document.getElementById("subsection2").value.length == 0) || (document.getElementById("subsection1").value.length == 0) ){
        alert("Fill all  details");
    }
    else{
        divCreation = document.createElement("div");
        divCreation.className = "divCreation"
        document.getElementById("showData").appendChild(divCreation);
        imgTagCreation = document.createElement("img");
        imgTagCreation.src = document.getElementById("subsection2").value;
        imgTagCreation.style.width = "200px";
        divCreation.appendChild(imgTagCreation);
        paragraphCreation = document.createElement("p");
        paragraphCreation.style.textAlign = "center";
        paragraphCreation.style.color = "white";
        paragraphCreation.innerHTML = document.getElementById("subsection1").value;
        divCreation.appendChild(paragraphCreation);

    }
}