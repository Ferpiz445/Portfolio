//Funções para scroll da nav

document.getElementById("logo-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("home-tela").scrollIntoView({behavior: "smooth"});
}

document.getElementById("home-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("home-tela").scrollIntoView({behavior: "smooth"});
}

document.getElementById("skills-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("skills-tela").scrollIntoView({behavior: "smooth"});
}

document.getElementById("certificados-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("certificados-tela").scrollIntoView({behavior: "smooth"});
}

