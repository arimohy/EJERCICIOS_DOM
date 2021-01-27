const d=document;

export function shorcut(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e);

    if(e.key==="a" && e.altKey){
        alert("Has lanzado una alerta com el teclado");
    }
    if(e.key==="c" && e.altKey){
        confirm("Has lanzado una confirmacion com el teclado");
    }
    if(e.key==="p" && e.altKey){
        prompt("Has lanzado una prompt com el teclado");
    }
}