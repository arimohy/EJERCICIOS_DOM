const d=document,
ls=localStorage;
export default function darkTheme(btn,classDark){
    const $themeBtn=d.querySelector(btn),
    $selector=d.querySelectorAll("[data-dark]");
    //console.log(selector)
    let moon="🌙",
    sun="☀️";

    const ligthMode=()=>{
        $selector.forEach(el=>el.classList.remove(classDark))
        $themeBtn.textContent=moon;
        ls.setItem("theme","light")

    }
    const darkMode=()=>{
        $selector.forEach(el=>el.classList.add(classDark))
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark")

    }
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            //console.log($themeBtn.textContent);
            if($themeBtn.textContent===moon){
                darkMode();
            }else{  
                ligthMode();
            }
        }
    })
    
    d.addEventListener("DOMContentLoaded",(e=>{
        console.log()
        if(ls.getItem("theme")===null)ls.setItem("theme","light");
        if(ls.getItem("theme")==="light")ligthMode();
        if(ls.getItem("theme")==="dark")darkMode();
    }));
}