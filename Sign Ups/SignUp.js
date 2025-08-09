function checkwhatsticked() {
    var experience = document.getElementById("yes")
    var joinfps = document.getElementById("fps")
    var joinfgc = document.getElementById("fgc")
    var fpsdiv =document.getElementById("fps-bg")
    var fgcdiv = document.getElementById("fgc-bg")

    console.log(experience.checked==true);
    console.log("BG EXPERIENCE ^^");
    console.log(joinfgc.checked==true);
    console.log(joinfps.checked==true);

    if (experience.checked==true && joinfps.checked==true) {
        fpsdiv.style.display = "block";
    }

    else{
        fpsdiv.style.display = "none";
    }

    if (experience.checked==true && joinfgc.checked==true) {
        fgcdiv.style.display = "block";
    }

    else{
        fgcdiv.style.display = "none";
    }

}