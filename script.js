// Hamburguer

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.onclick = function () {
    menu.classList.toggle('active');
};

// Funções para scroll da nav

document.getElementById("logo-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("home-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("home-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("home-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("about-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("about-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("certificados-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("certificados-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("skills-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("skills-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contatos-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("contatos-tela").scrollIntoView({ behavior: "smooth" });
}

// Contatos 

document.getElementById("whatsapp").onclick = function () {
    window.open("https://wa.me//5511943536373" , "_blank")
}

document.getElementById("linkedin").onclick = function () {
    window.open("https://www.linkedin.com/in/felipe-monteiro-a1ba1620a/" , "_blank")
}

document.getElementById("gmail").onclick = function () {
    window.open("mailto:fe.monteiro2002@gmail.com" , "_blank")
}

document.getElementById("github-ctt").onclick = function () {
    window.open("https://github.com/Ferpiz445" , "_blank")
}

