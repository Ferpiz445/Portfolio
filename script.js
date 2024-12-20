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

document.getElementById("portfolio-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("portfolio-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("skills-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("skills-tela").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contatos-buttom").onclick = function (event) {
    event.preventDefault();
    document.getElementById("contatos-tela").scrollIntoView({ behavior: "smooth" });
}

// Função para abrir links em uma nova aba
function openLink(id, url) {
    document.getElementById(id).onclick = function () {
        window.open(url, "_blank");
    };
}

openLink("linkedin", "https://www.linkedin.com/in/felipe-monteiro-a1ba1620a/");
openLink("gmail", "mailto:fe.monteiro2002@gmail.com");
openLink("oktohub", "https://oktohub.com.br/index.html");
openLink("transcribe", "https://transcribeimages.streamlit.app");

// Teste

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-wrap');

    cards.forEach((cardWrap) => {
        const card = cardWrap.querySelector('.card');
        const cardBg = card.querySelector('.card-bg');
        const cardInfo = card.querySelector('.card-info');

        let width = cardWrap.offsetWidth;
        let height = cardWrap.offsetHeight;
        let mouseX = 0;
        let mouseY = 0;
        let mouseLeaveDelay;

        // Atualiza as dimensões do card ao redimensionar a janela
        const updateDimensions = () => {
            width = cardWrap.offsetWidth;
            height = cardWrap.offsetHeight;
        };

        // Manipulador de movimento do mouse
        const handleMouseMove = (e) => {
            const cardRect = cardWrap.getBoundingClientRect();
            mouseX = e.clientX - cardRect.left - width / 2;
            mouseY = e.clientY - cardRect.top - height / 2;

            const mousePX = mouseX / width;
            const mousePY = mouseY / height;

            const rX = mousePX * 30;
            const rY = mousePY * -30;
            const tX = mousePX * -40;
            const tY = mousePY * -40;

            card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
            cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
        };

        // Manipulador para a entrada do mouse
        const handleMouseEnter = () => {
            clearTimeout(mouseLeaveDelay);
        };

        // Manipulador para a saída do mouse
        const handleMouseLeave = () => {
            mouseLeaveDelay = setTimeout(() => {
                mouseX = 0;
                mouseY = 0;
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
                cardBg.style.transform = 'translateX(0px) translateY(0px)';
            }, 800);
        };

        // Adiciona os eventos de mouse
        cardWrap.addEventListener('mousemove', handleMouseMove);
        cardWrap.addEventListener('mouseenter', handleMouseEnter);
        cardWrap.addEventListener('mouseleave', handleMouseLeave);

        // Define a imagem de fundo do card
        const dataImage = cardWrap.getAttribute('data-src'); // Usar data-src é uma prática comum
        if (dataImage) {
            cardBg.style.backgroundImage = `url(${dataImage})`;
        }

        // Atualiza as dimensões na inicialização e ao redimensionar a janela
        window.addEventListener('resize', updateDimensions);
        updateDimensions(); // Chama uma vez para garantir o valor correto inicial
    });
});
