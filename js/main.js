let root=document.querySelector("#root");


let div_formularios=document.createElement("div");
div_formularios.className="div_formularios";

let formularios=[{nombre:"login",link:"componenntes/login/login.html"},
    {nombre:"login",link:"#"},
    {nombre:"login",link:"#"},
    {nombre:"login",link:"#"}];
formularios.forEach(itemlista =>{
    alert("hola")


let item=document.createElement("a");

item.className="item";
item.href=itemlista.link;
item.innerText=itemlista.nombre;

div_formularios.appendChild(item);
});
root.appendChild(div_formularios);

