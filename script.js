menu = document.querySelector("nav#menu");

function clickMenu() {
  botao = document.querySelector("i#icon-menu");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function mudouTamanho() {
  if (innerWidth >= 600) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
