function openCategory(evt, category) {

    var i, navbarcontent, navbutton;

    navbarcontent = document.getElementsByClassName("tabbarcontent")
    for (i=0; i < navbarcontent.length; i++) {
        navbarcontent[i].style.display = "none";
    }

    navbutton = document.getElementsByClassName("tabbutton");
    for (i=0; i < navbutton.length; i++) {
        navbutton[i].className = navbutton[i].className.replace(" active", "");
    }

    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";

}







