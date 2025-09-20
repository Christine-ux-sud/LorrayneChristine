const switchButton = document.getElementById("switch")
const handle = switchButton.querySelector(".handle")
const html = document.documentElement
const avatar = document.getElementById("avatar")

switchButton.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "light") {
    html.setAttribute("data-theme", "dark")
    handle.style.left = "28px" // move bolinha para a direita
    handle.style.backgroundImage = "url('./assets/moon-stars.svg')" // ícone lua
    avatar.src = "./assents/assets/avatar-dark.png" // avatar para tema escuro
  } else {
    html.setAttribute("data-theme", "light")
    handle.style.left = "4px" // volta para a esquerda
    handle.style.backgroundImage = "url('./assets/sun.svg')" // ícone sol
    avatar.src = "./assents/assets/avatar-light.png" // avatar para tema claro
  }
})
