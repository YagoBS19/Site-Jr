//Início_Carrossel
let count = 1;
document.getElementById("r1").checked = true;

setInterval( function(){
    proxImg();
}, 5500)

function proxImg(){
    count++;
    if(count>2){
        count = 1;
    }

    document.getElementById("r"+count).checked = true;
}
//Fim_Carrossel

//Início_Menu_Responsivo
let ui = document.querySelector('nav .ui')

function openMenu(){
    ui.classList.add('open')
}

function closeMenu(){
    ui.classList.remove('open')
}
//Fim_Menu_Responsivo

//Início_Modal
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function(){
    modal.showModal()
}
buttonClose.onclick = function(){
    modal.close()
}
//Fim_Modal