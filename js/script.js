const iconMenu = document.querySelector('.bi-list')
const btMuda = document.getElementById('muda')

console.log(iconMenu)

function ativaNavegacao() {

    const navBar = document.querySelector('.navegacao')
    console.log(navBar)

    navBar.classList.toggle('oculta')

    document.body.classList.toggle('dark')
}

iconMenu.addEventListener('click', ativaNavegacao)
btMuda.addEventListener('change', ativaNavegacao)