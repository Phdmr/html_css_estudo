const botaoMenu = document.querySelector('.cabecalho__menu')

const menu = document.querySelector('.menu-lateral')

const botIco = document.querySelector('.menu-lateral__link')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')

})

document.querySelectorAll('.menu-latera__link').forEach(item =>{
    botIco.addEventListener('click', () => {
        botIco.classList.toggle('menu-lateral__link--ativo')
    })
})



