const d=document;
//console.log("llego hasta sorteo")
export default function draw(btn,selector){
    const getWinner=(selector)=>{
        const $players=d.querySelectorAll(selector),
        randon=Math.floor(Math.random()*$players.length),
        winner=$players[randon];
        //console.log($players,randon,winner)

        return `EL GANADOR ES:${winner.textContent}`
    }
    d.addEventListener("click",e=>{
        //console.log(d.querySelectorAll(selector).length)
        if(e.target.matches(btn)){
            //console.log("algo sucede pero no se que")
            let result =getWinner(selector)
            alert(result);
            console.log(result);
        }
    })

}