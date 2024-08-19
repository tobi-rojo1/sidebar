// ejecutar funcion en el evento click

document.getElementById("btn_open").addEventListener("click", open_close_menu); 
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// evento para mostrar y ocultar el menu

function open_close_menu(){

    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}

// si el ancho de la pagina es menor a 760px, ocutara el menu al recargar la pagina

if (window.innerWidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

// haciendo el menu responsive

window.addEventListener("reslize", function(){

   if (window.innerWidth < 7600){

    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
   }

   if (window.innerWidth < 7600){

    body.classList.remove.add("body_move");
    side_menu.classList.remove.add("menu__side_move");
   }
});