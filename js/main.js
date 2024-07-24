let root=document.querySelector("#root");


let div_formularios=document.createElement("div");
div_formularios.className="div_formularios";

let formularios=[{nombre:"login",link:"https"},
    {nombre:"login",link:"https"},
    {nombre:"login",link:"https"},
    {nombre:"login",link:"https"}];
formularios.forEach(itemlista =>{
    alert("hola")


let item=document.createElement("a");

item.className="item";
item.href=itemlista.link;
item.innerText=itemlista.nombre;

div_formularios.appendChild(item);
});
root.appendChild(div_formularios);

