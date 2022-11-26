let cara = 0, sello = 0, cont=0,contp=0,contg=0, total=0, totalapuesta=0;
const moneda = document.querySelector(".moneda");
const finalizar = document.querySelector("#finalizar-button");
const valorApuesta = document.getElementById('valorApuesta');
const opcionCara = document.getElementById('opcion');
const opcionSello = document.getElementById('opcion1')



opcionCara.addEventListener('click', () => {
    if(valorApuesta.value !=''){
        let valorApuesta = document.getElementById('valorApuesta').value;
        valorApuesta = parseInt(valorApuesta);
        let i = Math.floor(Math.random() * 2);
        if (i == 0) {
            total = total + valorApuesta*2;
            cont = cont + 1;
            contg = contg +1;
            swal(`La moneda cayo en cara. Ganaste ${valorApuesta}. Tienes un total de: ${total}`);
        }else if(i==1){
            total = total - valorApuesta;
            cont = cont + 1;
            contp = contp +1;
            swal(`La moneda cayo en sello. Perdiste  ${valorApuesta}. Tienes un total de: ${total}`);
        }
    setTimeout(updateStats, 1000);
    disableButton();
    }else{
        swal('Ingrese un valor a apostar')
    }
})


opcionSello.addEventListener('click', () => {
    if(valorApuesta.value !=''){
    let valorApuesta = document.getElementById('valorApuesta').value;
    valorApuesta = parseInt(valorApuesta);
    let i = Math.floor(Math.random() * 2);
    if (i == 1) {
        total = total + valorApuesta*2;
        cont = cont + 1;
        contg = contg +1;
        swal(`La moneda cayo en sello. Ganaste ${valorApuesta}. Tienes un total de: ${total}`);
    }else if(i==0){
        total = total - valorApuesta;
        cont = cont + 1;
        contp = contp +1;
        swal(`La moneda cayo en cara. Perdiste  ${valorApuesta}. Tienes un total de: ${total}`);
    }
    setTimeout(updateStats, 1000);
    disableButton();
    }else{
        swal('Ingrese un valor a apostar')
    }
})


function updateStats(){
    document.querySelector("#cant-count").textContent = `Partidas: ${cont}`;
    document.querySelector("#cantp-count").textContent = `Partidas perdidas: ${contp}`;
    document.querySelector("#cantg-count").textContent = `Partidas ganadas: ${contg}`;
    document.querySelector("#dinero-count").textContent = `dinero: ${total}`;
   
}

function disableButton(){
   opcionCara.disabled = true;
    setTimeout(function(){
       opcionCara.disabled = false;
    },1000);
}

function disableButton(){
    opcionSello.disabled = true;
     setTimeout(function(){
        opcionSello.disabled = false;
     },1000);
 }

finalizar.addEventListener("click",() => {
    swal(`Cantidad de partidas:${cont},Partidas ganadas:${contg},Partidas perdidas:${contp}, Monto final: ${total}`)
    .then((result) => {
            window.location.href = "./index.html";
    }) 
})



 

   
        
    