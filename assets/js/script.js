/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav_link');
    const scrollTopButton = document.getElementById('scroll-top');

    // Menu show
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    // Menu hidden
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // Hide menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
});

/*=============== BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header');
    
    // Correct scrollY usage and condition
    if (window.scrollY > 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}

window.addEventListener('scroll', blurHeader);

/*=============== IDENTIDADE ACORDEÃO ===============*/

const acordeaoItems = document.querySelectorAll('.identidade_acordeao-item');

acordeaoItems.forEach((item) => {
    const acordeaoHeader = item.querySelector('.identidade_header');

    acordeaoHeader.addEventListener('click', () => {
        toggleItem(item);
    });
});

const toggleItem = (item) => {
    const acordeaoContent = item.querySelector('.identidade_acordeao-content');

    // Verificar se o item já está aberto
    const isOpen = item.classList.contains('acorderap-open');
    
    // Fechar todos os itens antes de abrir o novo
    acordeaoItems.forEach((otherItem) => {
        if (otherItem !== item) {
            otherItem.classList.remove('acorderap-open');
            otherItem.querySelector('.identidade_acordeao-content').style.height = '0px';
        }
    });

    if (isOpen) {
        // Fechar o item
        item.classList.remove('acorderap-open');
        acordeaoContent.style.height = '0px';
    } else {
        // Abrir o item
        item.classList.add('acorderap-open');
        acordeaoContent.style.height = acordeaoContent.scrollHeight + 'px';
    }
};

/*===== SCROLL REVEAL ANIMATION =====*/

document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true  // Ativar se eu quiser que os elementos revelem novamente ao rolar
    });

    // Configurações para diferentes elementos
    sr.reveal('.home_data, .identidade_img', {
        origin: 'top'
    });

    sr.reveal ('', {
        origin: 'bottom',
        interval: 200 
    })

    sr.reveal ('.sobre_texto, .curso_img',{
        origin: 'right',
        interval: 200
    })

    sr.reveal ('.sobre_img, .curso_texto',{
        origin: 'left',
        interval: 200
    })

    sr.reveal('.banhogel_img', {
        origin: 'right',
        delay: 400
    });

    sr.reveal('', {
        origin: 'left',
        delay: 400
    });

    sr.reveal('.identidade_acordeao-item', {
        interval: 200
    });

    sr.reveal('', {
        interval: 200
    });
    
});