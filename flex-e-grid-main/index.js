const botaoMenu = document.querySelector('.cabecalho__menu');

const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')

})

var botoes = menu.querySelector('.menu-lateral__link');

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', () => {
        var current = document.getElementsByClassName('.menu-lateral__link--ativo');
        if (current.length > 0) { (current[0].className = current[0].className.replace('.menu-lateral__link--ativo',''))
            }
        this.className += '.menu-lateral__link--ativo';
        
        })
}





