const lista_desplegada=document.querySelector("#lista_pagina")
const boton_desplegar=document.querySelector("#boton_desplegable")
//Para verificar si la ventana esta activada o no
let desplegado=new Boolean(false);



lista_pagina=`<ul id="listapagina">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                </ul>`



const mostrar_lista=()=>
{
    lista_desplegada.innerHTML=lista_pagina;
}




const ocultar_lista=()=>
{
    lista_desplegada.innerHTML="";
}




boton_desplegar.addEventListener("click",()=>
{
    if (desplegado==false)
    {
        mostrar_lista();
        desplegado=true;
    }
    else if (desplegado==true)
    {
        ocultar_lista();
        desplegado=false;
    }
    
});