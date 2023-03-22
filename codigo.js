const boton_desplegar=document.querySelector("#boton_desplegable")
//Para verificar si la ventana esta activada o no
let listaVisible=false;


const lista_pagina=document.getElementById("lista_pagina")



const toggleLista=()=>
{
    listaVisible=!listaVisible  //Cambia el valor entre true y false
    if (listaVisible) //Si la lista esta abierta
    {
        mostrar_lista();
    }else    //Si la lista esta cerrada
    {
        ocultar_lista();
    }
}





const mostrar_lista=()=>
{
    lista_pagina.style.display='block';
}




const ocultar_lista=()=>
{
    lista_pagina.style.display='none';
}



boton_desplegar.addEventListener("click",()=>
{
    toggleLista()
    
});